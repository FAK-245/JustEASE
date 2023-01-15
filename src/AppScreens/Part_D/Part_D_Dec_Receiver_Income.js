import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Modal,
    Alert
} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import * as Progress from "react-native-progress";

import React from "react";
import Theme from "../../utils/Theme";
import styles from "../../styles/style_dec";
import Part_D_Dec_Add_Person from "./Part_D_Dec_Add_Person";


const Part_D_Dec_Receiver_Income = ({navigation}) => {


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
                {text: "OK", onPress: () => console.log("OK Pressed")}
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
                {text: "OK", onPress: () => console.log("OK Pressed")}
            ]
        );


    return (
        <View style={{flex: 1, paddingBottom: "14.7%", backgroundColor: "white"}}>
            <ScrollView>
                <View style={styles.View1}>
                    <Text style={styles.Text1}>Part D -</Text>
                    <Text style={styles.Text2}>Maintenance Obligations</Text>
                </View>
                <View style={{marginTop: "5%"}}>
                    {/* <View
            style={{
              backgroundColor: "blue",
              opacity: 0.6,
              height: Theme.hp("0.8%"),
              width: Theme.wp("15%"),
              alignSelf: "center",
            }}
          ></View> */}
                    <View style={styles.Line}/>
                    <View style={styles.View2}>
                        <Text
                            style={{
                                marginLeft: "10%",
                                color: "#1c5bd9",
                                marginTop: "15%",
                                //color: "#8da2b8",
                            }}
                        >
                            1.5) Do these relatives have income of their own? e.g. training allowance, maintenance
                            payment from the other parent, etc..
                        </Text>
                    </View>
                    <View style={styles.View3}>

                        <TouchableOpacity style={styles.yes}
                                          onPress={() => navigation.navigate("Part_D_In_Up_Receiver_Income")}>
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

                        <TouchableOpacity style={styles.no}
                                          onPress={() => navigation.navigate("Part_D_Dec_Add_Person")}>
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
                                    style={{margin: 5}}
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

                    </View>
                </View>
            </ScrollView>
            <Progress.Bar progress={1} width={210} height={3}/>
        </View>
    );
};

export default Part_D_Dec_Receiver_Income;
