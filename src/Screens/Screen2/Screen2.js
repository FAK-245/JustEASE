import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Theme from "../../utils/Theme";
import styles from "./style";
const Screen2 = ({ navigation }) => {
  return (
    <SafeAreaView
      style={{ flex: 1, paddingBottom: "20%", backgroundColor: "white" }}
    >
      <ScrollView>
        <View style={styles.View1}>
          <Text style={styles.Text1}>Part E -</Text>
          <Text style={styles.Text2}>Gross Income</Text>
        </View>
        <View style={{ marginTop: "5%" }}>
          <View
            style={{
              backgroundColor: "blue",
              opacity: 0.6,
              height: Theme.hp("0.8%"),
              width: Theme.wp("15%"),
              alignSelf: "center",
            }}
          ></View>
          <View style={styles.View2}>
            <Text
              style={{
                marginLeft: "7%",
                color: "#1c5bd9",
                marginTop: "15%",
                color: "#8da2b8",
              }}
            >
              Do you have income from employment?
            </Text>
          </View>
          <View style={styles.View3}>
            <TouchableOpacity
              style={styles.yes}
              onPress={() => navigation.navigate("Screen3")}
            >
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  margin: 10,
                  marginTop: "15%",
                  fontWeight: "500",
                }}
              >
                Yes
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.no}>
              <Text
                style={{
                  color: "white",
                  textAlign: "center",
                  margin: 10,
                  marginTop: "15%",
                  fontWeight: "500",
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
            <TouchableOpacity style={styles.back}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
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
                    textAlign: "center",
                    margin: 10,
                    fontWeight: "500",
                  }}
                >
                  Back
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.next}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  margin: 5,
                }}
              >
                <Text
                  style={{
                    color: "white",
                    // textAlign: "center",
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
                  style={{ margin: 5 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Screen2;
