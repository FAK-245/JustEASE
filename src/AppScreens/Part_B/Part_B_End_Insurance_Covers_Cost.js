import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Modal,
    Alert
} from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {useSafeAreaInsets} from "react-native-safe-area-context";

import React from "react";
import {global} from "../../styles/shared/global";
import Header from "../../Components/shared/Header";
import {screens} from "../../styles/shared/screens";



const Part_B_Dec_Answer_Insurance = ({ navigation }) => {

    //Safe are view
    const insets = useSafeAreaInsets();

    return (
        <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>

            <Header txt={"Part B - Legal protection"}/>
            <View style={{ backgroundColor: "white", flexGrow: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start"}}>

                <Text style={{color: "#1c5bd9", width: "80%", fontSize: 18, marginTop: "15%", marginBottom: "15%"}}>Have you contacted the insurance already about financing the legal process?</Text>

                <TouchableOpacity style={screens.largeBtnContainer} onPress={() => navigation.navigate("Part_B_Dec_Insurance")}>
                    <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={screens.largeBtnContainer} onPress={() => navigation.navigate("Part_B_End_Insurance_Not_Contacted")}>
                    <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>No</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
};

export default Part_B_Dec_Answer_Insurance;
