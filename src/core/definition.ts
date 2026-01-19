export const TOOL_NAME = "fetchWeather";

export const TOOL_DEFINITION = {
  type: "function" as const,
  name: TOOL_NAME,
  description:
    "Fetch weather forecast information from Japan Meteorological Agency (JMA) for any region in Japan. Supports all 47 prefectures plus regional subdivisions (59 areas total).",
  parameters: {
    type: "object" as const,
    properties: {
      areaCode: {
        type: "string",
        description:
          "The JMA area code for the location. Examples: Tokyo (130000), Osaka (270000), Hokkaido regions (011000-017000), Kyoto (260000), Fukuoka (400000), Okinawa (471000). All Japanese prefectures and regions are supported.",
      },
    },
    required: ["areaCode"],
  },
};
