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

import React from "react";
import Theme from "../../utils/Theme";
import styles from "../../styles/style_dec";
import Part_B_In_Name_Other_Protection from "./Part_B_In_Name_Other_Protection";
import Part_B_Up_Insurance_Rej_Letter from "./Part_B_Up_Insurance_Rej_Letter";


const Part_B_Dec_Other_Legal_Protection = ({ navigation }) => {


  const createThreeButtonAlert = () =>
  Alert.alert(
    "Yes is selected",
    "Selected",
    [
      {
        text: "Yes is selected",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );


  const NoSelected = () =>
  Alert.alert(
    "No is Selected",
    "Selected",
    [
      {
        text: "Yes is selected",
        onPress: () => console.log("Ask me later pressed")
      },
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel"
      },
      { text: "OK", onPress: () => console.log("OK Pressed") }
    ]
  );




  return (
    <View style={{ flex: 1, paddingBottom: "14.7%", backgroundColor: "white" }}>
      <ScrollView>
        <View style={styles.View1}>
          <Text style={styles.Text1}>Part B -</Text>
          <Text style={styles.Text2}>Legal Protection</Text>
        </View>
        <View style={{ marginTop: "5%" }}>
          {/* <View
            style={{
              backgroundColor: "blue",
              opacity: 0.6,
              height: Theme.hp("0.8%"),
              width: Theme.wp("15%"),
              alignSelf: "center",
            }}
          ></View> */}
          <View style={styles.Line}></View>
          <View style={styles.View2}>
            <Text
              style={{
                marginLeft: "10%",
                color: "#1c5bd9",
                marginTop: "15%",
                //color: "#8da2b8",
              }}
            >
                2) Are you a member of an organization which provides legal protection to their members for lawsuits
                like yours (e.g. trade union, tenants’ association or social associations)?
            </Text>
          </View>
          <View style={styles.View3}>

            <TouchableOpacity style={styles.yes}  onPress={() => navigation.navigate("Part_B_In_Name_Other_Protection")}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",

                  fontWeight: "500",
                  margin: "11%",
                  fontSize: RFValue(15, 580),
                }}
              >
                Yes
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.no} onPress={() => navigation.navigate("Part_C_Dec_Maintenance_Claims")}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",

                  fontWeight: "500",
                  margin: "11%",
                  fontSize: RFValue(15, 580),
                }}
              >
                No
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingTop: "20%",
            }}
          >
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.pop()}
            >
              <View
                style={{
                  flexDirection: "row",

                  margin: 5,
                }}
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color="white"
                  style={{ margin: 5 }}
                />
                <Text
                  style={{
                    color: "white",
                    // textAlign: "center",
                    margin: 7,
                    fontWeight: "500",
                  }}
                >
                  Back
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.next}
              onPress={() => navigation.navigate("Part_B_In_Name_Other_Protection")}
            >
              <View
                style={{
                  flexDirection: "row",

                  margin: 5,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    // textAlign: "right",
                    // marginLeft: "10%",
                    paddingLeft: "6%",
                    margin: 7,
                    fontWeight: "500",
                  }}
                >
                  Next
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color="white"
                  style={{ margin: 5 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Progress.Bar progress={1} width={210} height={3} />
    </View>
  );
};

export default Part_B_Dec_Other_Legal_Protection;
