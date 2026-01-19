export interface WeatherToolData {
  areaCode: string;
  areaName: string;
  publishingOffice?: string;
  reportDatetime?: string;
}

export interface WeatherJsonData {
  publishingOffice?: string;
  reportDatetime?: string;
  timeSeries?: Array<{
    timeDefines: string[];
    areas: Array<{
      area: {
        name: string;
        code?: string;
      };
      weatherCodes?: string[];
      weathers?: string[];
      winds?: string[];
      waves?: string[];
      pops?: string[];
      temps?: string[];
      tempsMin?: string[];
      tempsMinUpper?: string[];
      tempsMinLower?: string[];
      tempsMax?: string[];
      tempsMaxUpper?: string[];
      tempsMaxLower?: string[];
    }>;
  }>;
  tempAverage?: {
    areas: Array<{
      area: {
        name: string;
        code?: string;
      };
      min?: string;
      max?: string;
    }>;
  };
  precipAverage?: {
    areas: Array<{
      area: {
        name: string;
        code?: string;
      };
      min?: string;
      max?: string;
    }>;
  };
}

export interface WeatherArgs {
  areaCode: string;
}

export type { ToolResult } from "gui-chat-protocol/vue";
