import { writeFile } from "node:fs/promises";

const cities = [
  { id: "auckland", lat: -36.8485, lon: 174.7633 },
  { id: "christchurch", lat: -43.5321, lon: 172.6362 },
  { id: "kaikoura", lat: -42.4008, lon: 173.6814 },
  { id: "tekapo", lat: -44.0043, lon: 170.482 },
  { id: "mtcook", lat: -43.734, lon: 170.095 },
  { id: "queenstown", lat: -45.0312, lon: 168.6626 },
  { id: "wanaka", lat: -44.7032, lon: 169.1321 },
  { id: "milford", lat: -44.6414, lon: 167.8974 }
];

const params = new URLSearchParams({
  latitude: cities.map((city) => String(city.lat)).join(","),
  longitude: cities.map((city) => String(city.lon)).join(","),
  current: "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code",
  timezone: "auto",
  forecast_days: "1"
});

const response = await fetch(`https://api.open-meteo.com/v1/forecast?${params}`, {
  signal: AbortSignal.timeout(25000)
});
if (!response.ok) {
  throw new Error(`Open-Meteo returned ${response.status}`);
}

const payload = await response.json();
const rows = Array.isArray(payload) ? payload : [payload];
if (rows.length !== cities.length) {
  throw new Error(`Expected ${cities.length} weather records, received ${rows.length}`);
}

const locations = Object.fromEntries(
  cities.map((city, index) => {
    const current = rows[index]?.current;
    if (!current || !Number.isFinite(current.temperature_2m)) {
      throw new Error(`Missing weather data for ${city.id}`);
    }
    return [
      city.id,
      {
        time: current.time,
        temp: current.temperature_2m,
        apparent: current.apparent_temperature,
        humidity: current.relative_humidity_2m,
        wind: current.wind_speed_10m,
        code: current.weather_code
      }
    ];
  })
);

const output = {
  generated_at: new Date().toISOString(),
  source: "Open-Meteo",
  locations
};

await writeFile("weather-data.json", `${JSON.stringify(output, null, 2)}\n`, "utf8");
