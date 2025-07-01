# Weather Application

A modern weather application built with React Native and Expo, providing real-time weather information and forecasts.

## Features

- **Real-time Weather Data**: Get current weather conditions for any location
- **Weather Forecasts**: View detailed weather forecasts
- **Advanced Weather Metrics**: Access detailed meteorological data
- **Location Search**: Search for weather information by location
- **Clock Display**: Built-in clock functionality
- **Responsive Design**: Supports both light and dark themes
- **Custom UI Components**: Includes custom-built interface elements

## Project Structure

```
├── api/                 # API integration
├── app/                 # Main application code
├── assets/             # Static assets
│   ├── fonts/          # Custom fonts
│   └── images/         # Weather icons and images
├── components/         # Reusable React components
├── constants/          # Application constants
├── hooks/             # Custom React hooks
├── pages/             # Application pages/screens
├── scripts/           # Utility scripts
└── services/          # Business logic services
```

## Key Components

- `MeteoBasic`: Basic weather information display
- `MeteoAdvanced`: Detailed weather metrics
- `Searchbar`: Location search functionality
- `ForecastListItem`: Weather forecast display
- `Clock`: Time display component
- `Container`: Layout container component

## Technologies

- React Native
- Expo
- TypeScript
- ESLint
- Custom styling solutions

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on your device or emulator:
```bash
# For iOS
npm run ios

# For Android
npm run android
```

## Project Configuration

The project includes several configuration files:

- `app.json`: Expo configuration
- `tsconfig.json`: TypeScript configuration
- `eslint.config.js`: ESLint rules
- `eas.json`: Expo Application Services configuration

## Features Overview

### Weather Information
- Current weather conditions
- Temperature display
- Weather forecasts
- Advanced meteorological data

### User Interface
- Responsive design
- Theme support (light/dark)
- Custom animations
- Parallax scrolling effects

### Technical Features
- API integration
- Date/time services
- Weather data processing
- Custom UI components

## Assets

The application includes various weather-related assets:
- Weather condition icons (sun, rain, snow, etc.)
- Custom fonts
- Background images
- Application icons
