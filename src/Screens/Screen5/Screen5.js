import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import todoReducer from "../../redux/todoReducer";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../../redux/action";

import styles from "./style";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen5 = ({ navigation }) => {

  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState("");


  const html = `
    <html>
      <body>
      
      <h1>Hi ${todoList.name}</h1>
      <h2>Hi ${todoList.Screen3}</h2>
      <h3>Hi ${todoList.occupation}</h3>
      <h4>Hi ${todoList.dob}</h4>
      <h5>Hi ${todoList.street}</h5>
      <h6>Hi ${todoList.house}</h6>
      <h7>Hi ${todoList.city}</h7>
      <h8>Hi ${todoList.code}</h8>
      <h9>Hi ${todoList.number}</h9>
     
        <p style="color: red;">Hello. Bonjour. Hola.</p>
      </body>
    </html>
  `;

  
  let generatePdf = async () => {
    const file = await printToFileAsync({
      html: html,
      base64: false
    });

    await shareAsync(file.uri);
  };



 
  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingBottom: "14.5%" }}>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={styles.View1}>
         
          {/* <Text style={{fontSize:20, color: 'black'}}>{todoList.code}</Text> */}
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
          <TouchableOpacity style={styles.download} onPress={generatePdf}>
            <Text
              style={{
                fontSize: 15,
                color: "white",
                textAlign: "center",
                margin: 7,

                fontWeight: "600",
              }}
            >
              Download
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.back}
          onPress={() => navigation.navigate("Screen3")}
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
                textAlign: "center",
                margin: 7,
                fontWeight: "500",
              }}
            >
              Back
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      <Progress.Bar progress={1} width={410} height={3} />
    </View>
  );
};

export default Screen5;
