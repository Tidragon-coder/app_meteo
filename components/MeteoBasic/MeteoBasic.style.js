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
        height: 90,
        width: 90,
        resizeMode: 'contain',
    },
    temperature_box: {
        marginTop: 30,
        alignItems: 'baseline',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    temperature:{
        fontSize: 100,
    }
});

export { s };

