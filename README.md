# @gui-chat-plugin/weather

Weather forecast plugin for GUI Chat applications. Fetches weather data from Japan Meteorological Agency (JMA) API.

## Features

- Real-time weather forecast from JMA API
- Support for all 47 Japanese prefectures and 59 regional areas
- Interactive weather display with temperature charts
- Extended forecast with daily cards
- Precipitation probability visualization

## Installation

```bash
yarn add @gui-chat-plugin/weather
```

## Usage

### Vue Integration

```typescript
import { plugin } from "@gui-chat-plugin/weather/vue";
import "@gui-chat-plugin/weather/style.css";

// Register the plugin with your GUI Chat application
registerPlugin(plugin);
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

## License

MIT
