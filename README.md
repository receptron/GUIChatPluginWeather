# @gui-chat-plugin/weather

[![npm version](https://badge.fury.io/js/%40gui-chat-plugin%2Fweather.svg)](https://www.npmjs.com/package/@gui-chat-plugin/weather)

Weather forecast plugin for GUI Chat applications. Fetches weather data from Japan Meteorological Agency (JMA) API.

## Features

- Real-time weather forecast from JMA API
- Support for all 47 Japanese prefectures and 59 regional areas
- Interactive weather display with temperature charts
- Extended forecast with daily cards
- Precipitation probability visualization

## Installation

```bash
yarn add @gui-chat-plugin/weather gui-chat-protocol
```

> `gui-chat-protocol` is a peer dependency — install it alongside the plugin; the host application provides the runtime and this plugin only declares the compatible range.


## Usage

### Vue Integration

```typescript
// In src/tools/index.ts
import WeatherPlugin from "@gui-chat-plugin/weather/vue";

const pluginList = [
  // ... other plugins
  WeatherPlugin,
];

// In src/main.ts
import "@gui-chat-plugin/weather/style.css";
```

### Core-only Usage

```typescript
import { executeWeather, TOOL_DEFINITION } from "@gui-chat-plugin/weather";

// Fetch weather for Tokyo
const result = await executeWeather(context, {
  areaCode: "130000",
});
```

## API

### WeatherArgs

```typescript
interface WeatherArgs {
  areaCode: string; // JMA area code (e.g., "130000" for Tokyo)
}
```

### Area Codes

Common area codes:
- Tokyo: `130000`
- Osaka: `270000`
- Kyoto: `260000`
- Fukuoka: `400000`
- Hokkaido (Ishikari): `016000`
- Okinawa: `471000`

## Development

```bash
# Install dependencies
yarn install

# Run demo
yarn dev

# Build
yarn build

# Lint
yarn lint
```

## Test Prompts

Try these prompts to test the plugin:

1. "What's the weather forecast for Tokyo?"
2. "Show me the weather in Osaka"
3. "Will it rain in Hokkaido this week?"

## License

MIT

## Related

- Protocol spec: [gui-chat-protocol](https://github.com/receptron/gui-chat-protocol)
- Reference implementations using this protocol: [mulmoclaude](https://github.com/receptron/mulmoclaude) · [MulmoChat](https://github.com/receptron/MulmoChat)
