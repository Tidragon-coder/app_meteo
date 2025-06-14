const WEATHER_INTERPRETATION = [
    {
        code: [0],
        image: require("../assets/images/sun.png"),
        label:"Ensoleillé",
    },
    {
        code: [1, 2, 3, 45, 48],
        image: require("../assets/images/clouds.png"),
        label:"Nuageux",
    },
    {
        code: [51, 53, 55, 56, 57, 61, 63, 65, 66, 67, 80, 81, 82, 85, 86],
        image: require("../assets/images/rain.png"),
        label:"Pluvieux",
    },
    {
        code: [71, 73, 75, 77],
        image: require("../assets/images/snow.png"),
        label:"Neigeux",
    },
    {
        code: [96, 99],
        image: require("../assets/images/thunder.png"),
        label:"Orageux",
    },
];

export function getWeatherInterpretation(code) {
    return WEATHER_INTERPRETATION.find((interpretation) => 
        interpretation.code.includes(code));
}