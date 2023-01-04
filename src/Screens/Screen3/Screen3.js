import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import * as Progress from "react-native-progress";

import styles from "./style";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen3 = ({ navigation }) => {
  const [Name, setName] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingBottom: "14%" }}>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={styles.View1}>
          <Text style={styles.signuptxt}>Part E - </Text>
          <Text style={styles.signuptxt1}>Gross Income</Text>
        </View>
        <View style={styles.Line}></View>

        <View style={styles.textinputconatiner}>
          <Text
            style={{
              color: "#1c5bd9",
              textAlign: "center",
              fontSize: RFValue(13, 580),
            }}
          >
            1.1) How much do you earn monthly in € (gross)?
          </Text>
          <TextInput
            placeholderTextColor={"#87CEEB"}
            cursorColor="blue"
            placeholder="Input your Text in here"
            style={styles.txtinput}

            // onChangeText={handleChange("Name")}
            // onBlur={handleBlur("Name")}
          />
        </View>
        <View style={styles.textinputconatiner2}>
          <View>
            <Text
              style={{
                color: "#1c5bd9",
                marginLeft: "9%",
                fontSize: RFValue(13, 580),
              }}
            >
              Please upload the following documents here:
            </Text>
          </View>
          <View style={{ margin: 10 }}>
            <Text
              style={{
                color: "#1c5bd9",
                textAlign: "center",
                fontSize: RFValue(13, 580),
              }}
            >
              E1-1.1) wage or salary slips from the workspace
            </Text>
            <Text
              style={{
                color: "#1c5bd9",
                fontSize: RFValue(13, 580),
                marginLeft: "6.5%",
              }}
            >
              for the past 12 months proir to the application
            </Text>

            <TouchableOpacity style={styles.uploadimage}>
              <Ionicons
                name="images-outline"
                size={60}
                color="white"
                style={{ alignSelf: "center", margin: 20 }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ margin: 10 }}>
            <Text
              style={{
                color: "#1c5bd9",
                fontSize: RFValue(13, 580),
                marginLeft: "6.5%",
              }}
            >
              E1-1.1b) Latest income tax notice from the tax
            </Text>
            <Text
              style={{
                color: "#1c5bd9",
                fontSize: RFValue(13, 580),
                marginLeft: "6.5%",
              }}
            >
              office or electronic wage tax certificate
            </Text>
            <Text
              style={{
                color: "#1c5bd9",
                fontSize: RFValue(13, 580),
                marginLeft: "6.5%",
              }}
            >
              revealing gross and net income of last year
            </Text>

            <TouchableOpacity style={styles.uploadimage}>
              <Ionicons
                name="images-outline"
                size={60}
                color="white"
                style={{ alignSelf: "center", margin: 20 }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              //paddingTop: '10%'
            }}
          >
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate("Screen2")}
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
                    margin: 10,
                    fontWeight: "500",
                  }}
                >
                  Back
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.next}
              onPress={() => navigation.navigate("Screen4")}
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
                    margin: 10,
                    fontWeight: "500",
                  }}
                >
                  Next
                </Text>
                <Ionicons
                  name="chevron-forward"
                  size={24}
                  color="white"
                  style={{ margin: 6 }}
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

export default Screen3;
