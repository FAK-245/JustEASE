import { StyleSheet } from 'react-native';

export const language = StyleSheet.create({
    //Language view
    desc: {
        fontSize: 36,
        marginTop: "15%",
        marginBottom: "15%",
    },

    smallDesc: {
        fontSize: 18,
        width: "80%",
        textAlign: "center",
        marginBottom: "25%",
        fontWeight: "200"
    },

    pickDesc: {
        width: "80%",
        fontSize: 14,
        color: "#828386",
        paddingLeft: "2.5%",
        marginBottom: "1.25%"
    },

    pickWrapper: {
        width: "80%",
        height: 50,
        borderWidth: 2,
        borderRadius: 12,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingLeft: "2.5%",
        paddingRight: "2.5%",
        borderColor: "#C1D6E9",
        marginBottom: "25%",
    },

    dropDownIcon: {
        width: 20,
        height: 10
    },

    //Select view
    selectWrapper: {
        width: "100%",
        height: 60,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "row",
        borderBottomWidth: 1,
        borderColor: "#C1D6E9",
        paddingLeft: "2.5%"
    },

    extraDesc: {
        width: "80%",
        marginTop: "5%",
        paddingLeft: "2.5%"
    }

})