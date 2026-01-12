import { fetchWeatherApi } from "openmeteo";
import { fetchTemperatureData } from "../../utils/weather.util";

jest.mock("openmeteo");

describe("fetchTemperatureData", () => {
  test("returns mins and maxs arrays", async () => {
    const mockDaily = {
      variables: (index: number) => {
        if (index === 0) {
          return { valuesArray: () => new Float32Array([30.45, 31.12, 32.78]) };
        }
        if (index === 1) {
          return { valuesArray: () => new Float32Array([20.33, 21.67, 22.91]) };
        }
        return null;
      },
    };

    const mockResponse = {
      daily: () => mockDaily,
    };

    (fetchWeatherApi as jest.Mock).mockResolvedValue([mockResponse]);

    const result = await fetchTemperatureData("2024-01-01", "2024-01-03");

    expect(result.maxs[0]).toBeCloseTo(30.45, 2);
    expect(result.maxs[1]).toBeCloseTo(31.12, 2);
    expect(result.maxs[2]).toBeCloseTo(32.78, 2);
    
    expect(result.mins[0]).toBeCloseTo(20.33, 2);
    expect(result.mins[1]).toBeCloseTo(21.67, 2);
    expect(result.mins[2]).toBeCloseTo(22.91, 2);
  });

  test("throws error when API returns empty array", async () => {
    (fetchWeatherApi as jest.Mock).mockResolvedValue([]);

    await expect(
      fetchTemperatureData("2024-01-01", "2024-01-02")
    ).rejects.toThrow();
  });
});
