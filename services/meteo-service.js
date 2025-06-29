const WEATHER_INTERPRETATION = [
    {
        code: [0, 1],
        image: require("../assets/images/sun.png"),
        label:"Ensoleillé",
    },
    {
        code: [2],
        image: require("../assets/images/partly-cloudy.png"),
        label:"Partiel. Nuageux",
    },
    {
        code: [3],
        image: require("../assets/images/very-clouds.png"),
        label:"très Nuageux",
    },

    {
        code: [45],
        image: require("../assets/images/Fog.png"),
        label:"Brouillard",
    },
    {
        code: [48],
        image: require("../assets/images/Cold.png"),
        label:"Givreux",
    },
    {
        code: [51, 53, 55, 61, 63,66, 67, 80, 81, 82, 85, 86],
        image: require("../assets/images/rain.png"),
        label:"Pluvieux",
    },
    {
        code: [65],
        image: require("../assets/images/Very-rain.png"),
        label:"Forte pluie",
    },
    {
        code: [56, 57],
        image: require("../assets/images/Very-rain.png"),
        label:"Pluie verglasante",
    },
    {
        code: [71, 73, 75, 77],
        image: require("../assets/images/snow.png"),
        label:"Neigeux",
    },
    {
        code: [95],
        image: require("../assets/images/Partly.png"),
        label:"Orageux",
    },
    {
        code: [96, 99],
        image: require("../assets/images/thunder.png"),
        label:"Orageux pluie/greles",
    },
];

export function getWeatherInterpretation(code) {
    return (
        WEATHER_INTERPRETATION.find((interpretation) => 
            interpretation.code.includes(code)) || 
        {
            code: [-1],
            image: require("../assets/images/partly-cloudy.png"),
            label: "Indéfini"
        }
    );
}
