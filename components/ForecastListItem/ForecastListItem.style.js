import { StyleSheet } from "react-native";

const s = StyleSheet.create({
    container:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#e6e6e6',
    },
    imageContainer: {
        alignItems: 'center',
        width: 80,
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
    label: {
        fontSize: 12,
        marginTop: 6,
        textAlign: 'center',
    },
    day:{
        fontSize: 18,
        marginRight: 8,
    },    
    date: {
        fontSize: 16,
    },
    temperature: {
        width: 60,
        textAlign: 'right',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export { s };

