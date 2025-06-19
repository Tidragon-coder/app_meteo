import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
    },
    img_background: {
        flex: 1,
        width: '100%',
        height: '100%',
        backgroundColor: 'black',
        padding: 20,
    },
    img: {
        opacity: 0.75,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: null,
        height: null,
        resizeMode: 'cover',
    },
});

export { s };

