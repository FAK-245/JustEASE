import { StyleSheet } from 'react-native';

export const global = StyleSheet.create({
    parentContainer: {
        backgroundColor: "white",
        flex: 1,
        alignItems: 'center',
    },

    container:{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },

    //Half faded up modal
    modalContainer: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        backgroundColor: 'rgba(52, 52, 52, 0.4)'
    },

    modalInnerContainer: {
        width: "100%",
        height: "50%",
        backgroundColor: "white",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        padding: "2.5%"
    },

    modalInnerClose: {
        width: "20%",
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        borderRadius: 14
    },

    modalInnerTxt: {
        color: "white"
    },


    //Header text
    headerContainer: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between"
    },

    headerTxt: {
        fontSize: 36,
        fontWeight: "bold",
        color: "black",
        marginBottom: "5%",
        marginTop: "5%"
    },

    headerBorder: {
        width: "90%",
        height: 5,
        backgroundColor: "#002DE3"
    }

})