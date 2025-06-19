import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    content: {
        flex: 1,
        width: '100%',
        justifyContent: 'space-between',
    },
    meteo_basic: {
        width: '100%',
        paddingVertical: 20,
        flex: 2,
    },
    meteo_searchbar_container: {
        width: '100%',
        paddingVertical: 20,
        flex: 1,
    },
    meteo_advanced: {
        width: '100%',
        paddingBottom: 20,
        flex: 1,
    },
});

export { s };

