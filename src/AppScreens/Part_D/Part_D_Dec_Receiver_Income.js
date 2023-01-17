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

LogBox.ignoreAllLogs();
const Screen1 = ({ navigation }) => {

  //Safe are view
  const insets = useSafeAreaInsets();

  return (
      <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>

        <Header txt={"Part D - Maintenance II"}/>
        <View style={{ backgroundColor: "white", flexGrow: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start"}}>

          <Text style={{color: "#1c5bd9", fontSize: 18, marginTop: "15%", marginBottom: "15%"}}>1.5) Do these relatives have income of their own? e.g. training allowance, maintenance payment from the other parent, etc..</Text>

          <TouchableOpacity style={screens.largeBtnContainer} onPress={() => navigation.navigate("Part_D_In_Up_Receiver_Income")}>
            <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={screens.largeBtnContainer} onPress={() => navigation.navigate("Part_SA_Dec_Receive_SA")}>
            <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>No</Text>
          </TouchableOpacity>

        </View>
      </View>
  );

};

export default Screen1;
