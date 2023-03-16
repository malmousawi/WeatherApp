import axios from 'axios';

const API_KEY = 'a8007d417a83d1024caf3513b131c698';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/';

export async function fetchWeatherData(location) {
  const response = await axios.get(`${BASE_URL}forecast/daily`, {
    params: {
      q: location,
      cnt: 10, // Number of days in the forecast
      appid: API_KEY,
      units: 'metric',
    },
  });

  return response.data;
}
