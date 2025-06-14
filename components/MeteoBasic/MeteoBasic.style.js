import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    clock:{
        alignItems: 'flex-end',
    },
    weather_label: {
        alignSelf: 'flex-end ', 
        transform: [{ rotate: '-90deg' }],
        fontSize: 20,
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
    },
    temperature_box: {
        alignItems: 'baseline',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    temperature:{
        fontSize: 100,
    }
});

export { s };

