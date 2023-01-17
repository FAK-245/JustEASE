import { StyleSheet } from 'react-native';

export const overview = StyleSheet.create({
    scrollView: {
        width: "100%",
        flex: 1,
        marginTop: "7.5%"
    },

    listElem: {
        width: "100%",
        height: 50,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: "3.5%",
        paddingRight: "3.5%"
    },

    img: {
        width: 20,
        height: 20
    }
})