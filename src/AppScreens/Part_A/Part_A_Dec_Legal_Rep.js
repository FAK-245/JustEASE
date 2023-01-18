import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Modal,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import * as Progress from "react-native-progress";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";

import Theme from "../../utils/Theme";
import {global} from "../../styles/shared/global";
import {screens} from "../../styles/shared/screens";

//Components
import Part_A_Legal_Rep_Info from "./Part_A_Legal_Rep_Info"
import Header from "../../Components/shared/Header";
import BackButtonBar from "../../Components/shared/BackButtonBar";


const Part_A_Dec_Legal_Rep = ({ navigation }) => {

    //Safe are view
    const insets = useSafeAreaInsets();

    return (
        <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>

            <Header txt={"Part A - Personal Information"}/>
            <View style={{ backgroundColor: "white", flexGrow: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start"}}>

                <Text style={{color: "#1c5bd9", fontSize: 18, marginTop: "15%", marginBottom: "15%"}}>Are you of legal age (18 years or older)?</Text>

                <TouchableOpacity style={screens.largeBtnContainer} onPress={() => navigation.navigate("Part_B_Dec_Answer_Insurance")}>
                    <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={screens.largeBtnContainer} onPress={() => navigation.navigate("Part_A_Legal_Rep_Info")}>
                    <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>No</Text>
                </TouchableOpacity>
          </View>
            <BackButtonBar/>
    </View>
  );
};

export default Part_A_Dec_Legal_Rep;
