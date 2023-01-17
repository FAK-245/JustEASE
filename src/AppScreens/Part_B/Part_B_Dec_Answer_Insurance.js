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

import React from "react";
import Theme from "../../utils/Theme";
import styles from "../../styles/style_dec";
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

                <Text style={{color: "#1c5bd9", fontSize: 18, marginTop: "15%", marginBottom: "15%"}}>Do you have legal protection insurance?</Text>

                <TouchableOpacity style={screens.largeBtnContainer} onPress={() => navigation.navigate("Part_B_Dec_Answer_Insurance")}>
                    <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>Yes</Text>
                </TouchableOpacity>
                <TouchableOpacity style={screens.largeBtnContainer} onPress={() => navigation.navigate("Part_C_Dec_Maintenance_Claims")}>
                    <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>No</Text>
                </TouchableOpacity>

            </View>
        </View>
  );
};

export default Part_B_Dec_Answer_Insurance;
