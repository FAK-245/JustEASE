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
import styles from "./style";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen4 = ({ navigation }) => {
  const [Name, setName] = useState("");
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingBottom: "20%" }}>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={styles.View1}>
          <Text style={styles.signuptxt}>Part E - </Text>
          <Text style={styles.signuptxt1}>Gross Income</Text>
        </View>
        <View style={styles.Line}></View>

        <View style={styles.FlatView}>
          <Text style={styles.document1}>
            Choose how you want to upload your documents
          </Text>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity>
              <MaterialIcons
                name="drive-folder-upload"
                size={74}
                color="black"
              />
              <Text>from file</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="add-to-drive" size={74} color="black" />
            </TouchableOpacity>
          </View>
          <View
            style={{ flexDirection: "row", justifyContent: "space-evenly" }}
          >
            <TouchableOpacity>
              <MaterialIcons
                name="drive-folder-upload"
                size={74}
                color="black"
              />
              <Text>from file</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="add-to-drive" size={74} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textinputconatiner2}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              // marginBottom: "10%",
            }}
          >
            <TouchableOpacity style={styles.back}>
              <Ionicons
                name="chevron-back"
                size={24}
                color="white"
                style={{ margin: 7 }}
              />
              <Text
                style={{
                  color: "white",

                  margin: 11,
                  fontWeight: "500",
                }}
              >
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.next}
              onPress={() => navigation.navigate("Screen4")}
            >
              <Text
                style={{
                  color: "white",

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
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Screen4;
