import { fetchWeatherApi } from "openmeteo";

const DHAKA_LAT = 23.8103;
const DHAKA_LON = 90.4125;

export const fetchTemperatureData = async (
  startDate: string,
  endDate: string
): Promise<{ mins: number[]; maxs: number[] }> => {
  const params = {
    latitude: DHAKA_LAT,
    longitude: DHAKA_LON,
    daily: ["temperature_2m_max", "temperature_2m_min"],
    timezone: "Asia/Dhaka",
    start_date: startDate,
    end_date: endDate,
  };

  const url = "https://archive-api.open-meteo.com/v1/archive";

  const responses = await fetchWeatherApi(url, params);

  if (!responses || responses.length === 0) {
    throw new Error("No response from weather API");
  }

  const response = responses[0];

  const daily = response.daily();

  if (!daily) {
    throw new Error("Daily data missing");
  }

  const rawMaxs = daily.variables(0)?.valuesArray();
  const rawMins = daily.variables(1)?.valuesArray();

  if (!rawMaxs || !rawMins) {
    throw new Error("Temperature arrays missing");
  }

  const maxs = Array.from(rawMaxs);
  const mins = Array.from(rawMins);

  return { mins, maxs };
};
