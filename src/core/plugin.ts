import type { ToolContext, ToolResult } from "gui-chat-protocol/vue";
import type { WeatherToolData, WeatherJsonData, WeatherArgs } from "./types";
import { TOOL_DEFINITION } from "./definition";
import officesData from "./data/offices.json";

export type WeatherResult = ToolResult<WeatherToolData, WeatherJsonData>;

// Area code mapping - built from offices.json
const AREA_CODES: Record<string, string> = officesData.reduce(
  (acc, office) => {
    acc[office.code] = office.name;
    return acc;
  },
  {} as Record<string, string>,
);

export const fetchWeather = async (
  _context: ToolContext,
  args: WeatherArgs,
): Promise<WeatherResult> => {
  const { areaCode } = args;
  const areaName = AREA_CODES[areaCode] || "Unknown";

  try {
    const url = `https://www.jma.go.jp/bosai/forecast/data/forecast/${areaCode}.json`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `JMA API error: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    // JMA API returns an array of forecast data
    // Typically the first element contains the main forecast
    const forecastData =
      Array.isArray(data) && data.length > 0 ? data[0] : null;

    if (!forecastData) {
      return {
        message: `No weather data available for ${areaName}`,
        title: `Weather - ${areaName}`,
        instructions:
          "Acknowledge that no weather data is available for the requested area.",
        data: {
          areaCode,
          areaName,
        },
      };
    }

    return {
      message: `Successfully fetched weather forecast for ${areaName}`,
      title: `Weather - ${areaName}`,
      jsonData: forecastData,
      instructions:
        "Provide a summary of the weather forecast. Include today's weather, temperature range, and any notable conditions. Keep it concise and conversational.",
      data: {
        areaCode,
        areaName,
        publishingOffice: forecastData.publishingOffice,
        reportDatetime: forecastData.reportDatetime,
      },
    };
  } catch (error) {
    console.error("*** Weather fetch failed", error);
    return {
      message: `Failed to fetch weather for ${areaName}: ${error instanceof Error ? error.message : "Unknown error"}`,
      title: `Weather - ${areaName}`,
      instructions:
        "Acknowledge that the weather data fetch failed and suggest trying again.",
      data: {
        areaCode,
        areaName,
      },
    };
  }
};

export { TOOL_DEFINITION };
