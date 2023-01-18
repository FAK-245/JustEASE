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

import React, {useState} from "react";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {global} from "../../styles/shared/global";
import Header from "../../Components/shared/Header";
import {screens} from "../../styles/shared/screens";
import {RFValue} from "react-native-responsive-fontsize";
import {modifyResponses} from "../../redux/slice/formSlice";
import {store} from "../../redux/store/store";
import {useDispatch} from "react-redux";
import BackButtonBar from "../../Components/shared/BackButtonBar";

LogBox.ignoreAllLogs();
const Part_B_Dec_Applied_Other_Protection = ({navigation}) => {

    //Safe are view
    const insets = useSafeAreaInsets();

    //Redux
    const dispatch = useDispatch();

    const saveState = (answer) => {
        dispatch(modifyResponses({
            "Ja_2": answer,
            "Nein_3": !answer
        }))
    }

    return (
        <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>

            <Header txt={"Part B - Legal Protection"}/>
            <View style={{
                backgroundColor: "white",
                flexGrow: 1,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start"
            }}>

                <Text style={{color: "#1c5bd9", fontSize: 18, marginTop: "15%", width: "80%", marginBottom: "15%"}}>Are
                    you a member of an organization which provides legal protection to their members for lawsuits like
                    yours (e.g. trade union, tenants’ association or social associations)?</Text>

                <TouchableOpacity style={screens.largeBtnContainer} onPress={() => {
                    navigation.navigate("Part_B_In_Name_Other_Protection");
                    saveState(true);
                }}>
                    <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={screens.largeBtnContainer} onPress={() => {
                    navigation.navigate("Part_C_Dec_Maintenance_Claims");
                    saveState(false);
                }}>
                    <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>No</Text>
                </TouchableOpacity>

            </View>
            <BackButtonBar/>
        </View>
    );

};

export default Part_B_Dec_Applied_Other_Protection;
