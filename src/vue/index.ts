import "../style.css";

import type { ToolPlugin } from "gui-chat-protocol/vue";
import type { WeatherToolData, WeatherJsonData, WeatherArgs } from "../core/types";
import { TOOL_DEFINITION, fetchWeather } from "../core/plugin";
import { samples } from "../core/samples";
import WeatherView from "./View.vue";
import WeatherPreview from "./Preview.vue";

export const plugin: ToolPlugin<WeatherToolData, WeatherJsonData, WeatherArgs> = {
  toolDefinition: TOOL_DEFINITION,
  execute: fetchWeather,
  generatingMessage: "Fetching weather forecast...",
  isEnabled: () => true,
  delayAfterExecution: 2000,
  viewComponent: WeatherView,
  previewComponent: WeatherPreview,
  systemPrompt:
    "When fetching weather, you can provide forecasts for Tokyo (130000) and Osaka (270000). Summarize the weather in a natural, conversational way.",
  samples,
};

export { fetchWeather as executeWeather } from "../core/plugin";
export * from "../core/types";
export { TOOL_DEFINITION } from "../core/definition";

export default { plugin };
