import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    clock:{
        alignItems: 'flex-end',
        width: '100%',
        marginBottom: 20,
    },
    weather_label: {
        alignSelf: 'flex-end',
        marginRight: -30,
        transform: [{ rotate: '-90deg' }],
        fontSize: 20,
        width: 100,
        textAlign: 'center',
    },
    image: {
        height: 90,
        width: 90,
        resizeMode: 'contain',
    },
    temperature_box: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    temperature:{
        fontSize: 100,
        textAlign: 'left',
    },
    city: {
        fontSize: 40,
    },
});

export { s };

