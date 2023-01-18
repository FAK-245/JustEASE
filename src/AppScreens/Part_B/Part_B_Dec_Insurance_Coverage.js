import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert,
    LogBox,
    Button,
    FlatList
} from "react-native";

import React, { useState } from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {global} from "../../styles/shared/global";
import Header from "../../Components/shared/Header";
import {screens} from "../../styles/shared/screens";
import {RFValue} from "react-native-responsive-fontsize";
import BackButtonBar from "../../Components/shared/BackButtonBar";
import {useDispatch} from "react-redux";
import {modifyResponses} from "../../redux/slice/formSlice";

LogBox.ignoreAllLogs();
const Screen1 = ({ navigation }) => {

    //Safe are view
    const insets = useSafeAreaInsets();

    //Redux
    const dispatch = useDispatch();

    const saveState = (answer) => {
        dispatch(modifyResponses({
            "Höhe der Kosten": answer,
        }))
    }

    return (
        <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>

            <Header txt={"Part D - Maintenance II"}/>
            <View style={{ backgroundColor: "white", flexGrow: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start"}}>

                <Text style={{color: "#1c5bd9", fontSize: 18, marginTop: "15%", marginBottom: "15%"}}>What was the response of the insurance company?</Text>

                <TouchableOpacity style={screens.largeBtnContainer} onPress={() => {
                    navigation.navigate("Part_B_End_Insurance_Not_Contacted");
                    saveState("It will cover the full cost of the process.")
                }}>
                    <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>It will cover the full cost of the process</Text>
                </TouchableOpacity>
                <TouchableOpacity style={screens.largeBtnContainer} onPress={() => {
                    navigation.navigate("Part_B_In_Insurance_Cost_Coverage");
                    saveState("It will partially cover the costs of the process.")
                }}>
                    <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>It will partially cover the costs of the process</Text>
                </TouchableOpacity>
                <TouchableOpacity style={screens.largeBtnContainer} onPress={() => {
                    navigation.navigate("Part_B_Up_Insurance_Rej_Letter");
                    saveState("It will not cover the cost of the process.")
                }}>
                    <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>It will not cover the cost of the process.</Text>
                </TouchableOpacity>

            </View>
            <BackButtonBar/>
        </View>
    );

};

export default Screen1;
