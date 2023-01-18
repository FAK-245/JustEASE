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

import { useSelector, useDispatch } from "react-redux";
//import { addTodo } from "../../redux/action";
import { Ionicons } from "@expo/vector-icons";
import { printToFileAsync } from 'expo-print';
import { shareAsync } from 'expo-sharing';
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from "react-native-popup-dialog";
import React, { useState } from "react";
import styles from "../../styles/style_dec";
import { Formik } from "formik";
import * as Yup from "yup";
import * as Progress from "react-native-progress";
import Theme from "../../utils/Theme";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {global} from "../../styles/shared/global";
import Header from "../../Components/shared/Header";
import {screens} from "../../styles/shared/screens";
import {RFValue} from "react-native-responsive-fontsize";
import BackButtonBar from "../../Components/shared/BackButtonBar";

const signUpSchema = Yup.object({
  Name: Yup.string()
    .min(0, "Minimum Input")
    .required("Required Field")
    .max(30, "Limit Exceed"),
  Occupation: Yup.string()
    .required("Required Field")
    .min(0, "Minimum Input")
    .max(30, "Limit Exceed"),
  Dob: Yup.string().min(0).required("Required Field").max(30, "Limit Exceed"),
  Street: Yup.string()
    .min(0)
    .required("Required Field")
    .max(20, "Limit Exceed"),
  House: Yup.string().min(0).required("Required Field").max(20, "Limit Exceed"),
  City: Yup.string().min(0).required("Required Field").max(20, "Limit Exceed"),
  PostalCode: Yup.string()
    .min(0)
    .required("Required Field")
    .max(20, "Limit Exceed"),
  PhoneNumber: Yup.string()
    .min(0)
    .required("Required Field")
    .max(20, "Limit Exceed"),
});
LogBox.ignoreAllLogs();
const Screen1 = ({ navigation }) => {

  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  //Safe are view
  const insets = useSafeAreaInsets();

  return (
      <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>

        <Header txt={"Social assistance"}/>
        <View style={{ backgroundColor: "white", flexGrow: 1, width: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start"}}>

          <Text style={{color: "#1c5bd9", fontSize: 18, marginTop: "15%", marginBottom: "15%"}}>Do you receive regular payments for subsistence in accordance with the Twelfth Book of the Social Code (social assistance)?</Text>

          <TouchableOpacity style={screens.largeBtnContainer} onPress={() => navigation.navigate("Part_SA_Up_Proof")}>
            <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={screens.largeBtnContainer} onPress={() => navigation.navigate("End_Screen")}>
            <Text style={{color: "white", fontWeight: "500", fontSize: RFValue(15, 580)}}>No</Text>
          </TouchableOpacity>

        </View>
      <BackButtonBar/>
      </View>
  );
};

export default Screen1;
