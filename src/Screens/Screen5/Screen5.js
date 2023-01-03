import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as Progress from 'react-native-progress';


import styles from "./style";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen5 = ({ navigation }) => {
  const [Name, setName] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingBottom: "20%" }}>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={styles.View1}>
          <Text style={styles.signuptxt}>Download</Text>
        </View>
        <View style={styles.Line}></View>

        <View style={styles.FlatView}>
          <View style={{ margin: "8%" }}>
            <Text style={styles.document1}>Your application is complete.</Text>
            <Text style={styles.document2}>
              Click on the download button below to generate your application.
            </Text>
          </View>
          <View style={{ margin: "8%" }}>
            <Text style={styles.document1}>Important</Text>
            <Text style={styles.document2}>
              After You have download your application you have to signit under
              point K on page 4. Afterwards you need to send it to your lawyer
              or directly to the court at which your case is being processed.
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            margin: "10%",
            paddingTop: "10%",
          }}
        >
          <MaterialIcons name="file-download" size={50} color="black" />
          <TouchableOpacity style={styles.download}>
            <Text
              style={{
                fontSize: 15,
                color: "white",
                textAlign: "center",
                margin: 10,

                fontWeight: "600",
              }}
            >
              Download
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Progress.Bar progress={1}  width={410} height={3}/>

    </View>
  );
};

export default Screen5;
