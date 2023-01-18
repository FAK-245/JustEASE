import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Modal,
    Alert
} from "react-native";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import React, {useState} from "react";
import {global} from "../../styles/shared/global";
import Header from "../../Components/shared/Header";
import {screens} from "../../styles/shared/screens";

//Redux
import {useSelector, useDispatch} from "react-redux";
import {modifyResponses, selectResponses} from "../../redux/slice/formSlice";
import {store} from "../../redux/store/store";
import ButtonBar from "../../Components/shared/ButtonBar";
import BackButtonBar from "../../Components/shared/BackButtonBar";


const Part_B_Dec_Answer_Insurance = ({navigation}) => {

    //Safe are view
    const insets = useSafeAreaInsets();

    //Redux
    const dispatch = useDispatch();

    const saveState = (answer) => {
        dispatch(modifyResponses({
            "Ja": answer,
            "1. Nein": !answer
        }))
        console.log(store.getState());
    }

    return (
        <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>

            <Header txt={"Part B - Legal protection"}/>
            <View style={{
                backgroundColor: "white",
                flexGrow: 1,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start"
            }}>

                <Text style={{color: "#1c5bd9", fontSize: 18, marginTop: "15%", marginBottom: "15%"}}>Do you have legal
                    protection insurance?</Text>

                <TouchableOpacity style={screens.largeBtnContainer} onPress={() => {
                    navigation.navigate("Part_B_Up_Insurance");
                    saveState(true)
                }}>
                    <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={screens.largeBtnContainer}
                                  onPress={() => {
                                      navigation.navigate("Part_B_Dec_Applied_Other_Protection");
                                      saveState(false)
                                  }}>
                    <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>No</Text>
                </TouchableOpacity>

            </View>
            <BackButtonBar/>
        </View>
    );
};

export default Part_B_Dec_Answer_Insurance;
