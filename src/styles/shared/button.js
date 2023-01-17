import { StyleSheet } from 'react-native';
import Theme from "../../utils/Theme";

export const button = StyleSheet.create({
    container: {
        width: "80%",
        height: 52,
        borderRadius: 40,
        backgroundColor: "#002DE3",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },

    containerTxt: {
        fontSize: 18,
        color: "white"
    },

    //Button bar
    buttonRow: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "5%",
        borderTopWidth: 1,
        borderTopColor: "#002DE3",
        paddingTop: "2.5%",
        paddingBottom: "2.5%",
    },

    button: {
        height: 45,
        width: "35%",
        backgroundColor: "#1c5bd9",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },

    back: {
        marginLeft: "5%",
        opacity: 0.8,
    },

    next: {
        marginRight: "5%",
        opacity: 0.8,
    },

    btnTxt: {
        fontSize: 14,
        color: "white",
        width: "60%",
        textAlign: "center"
    }
})