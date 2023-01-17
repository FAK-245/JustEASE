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
import styles from "../../styles/style_in";
import { Formik } from "formik";
import * as Yup from "yup";
import * as Progress from "react-native-progress";
import Part_B_Dec_Insurance from "../Part_B/Part_B_Dec_Insurance"
import Theme from "../../utils/Theme";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {global} from "../../styles/shared/global";
import Header from "../../Components/shared/Header";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import ButtonBar from "../../Components/shared/ButtonBar";

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
const Part_A_Legal_Rep_Info = ({ navigation }) => {

  //Safe are view
  const insets = useSafeAreaInsets();

  const dispatch = useDispatch();


  const [Name, setName] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [Dob, setDob] = useState("");
  const [Street, setStreet] = useState("");
  const [House, setHouse] = useState("");
  const [City, setCity] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
  //for dialog boxes
  const [occDialog, setOccDialog] = useState(false);
  const [nameDialog, setNameDialog] = useState(false);
  const [dobDialog, setDobDialog] = useState(false);
  const [phoneDialog, setPhoneDialog] = useState(false);
  const [addDialog, setAddDialog] = useState(false);



  const createUserFun = (values) => {
    // console.log(values)
    // return
    if (values != "") {
      dispatch(addTodo({
        name:values.Name,
        occupation:values.Occupation,
        dob:values.Dob,
        street:values.Street,
        house:values.House,
        city:values.City,
        code:values.PostalCode,
        number:values.PhoneNumber




        // age:"123445",
      }))
      //  console.log(todoList)

      Alert.alert(
          "Personal Informaton Submitted!",
          "Press Ok to go on Next Part",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel",
            },
            { text: "OK", onPress: () => navigation.navigate("Screen2") },
          ]
      );
    } else {
      Alert.alert("Please Complete your information!");
    }

  };



  return (
      <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>

        <Header txt={"Social Assistance"}/>

        <Dialog
            onTouchOutside={() => {
              setNameDialog(false);
            }}
            width={0.9}
            visible={nameDialog}
            dialogAnimation={new ScaleAnimation()}
            onHardwareBackPress={() => {
              setNameDialog(false);
              console.log("onHardwareBackPress");
              return true;
            }}
            dialogTitle={
              <DialogTitle
                  title="Info Box For Name Field
                  "
                  hasTitleBar={false}
              />
            }
            actions={[
              <DialogButton
                  text="DISMISS"
                  onPress={() => {
                    setNameDialog(false);
                  }}
                  key="button-1"
              />,
            ]}
        >
          <DialogContent>
            <View>
              <Text style={{ marginBottom: "2%" }}>
                Here you have to input your exact name which is written in your
                documents etc..
              </Text>
              <Button
                  title="Close"
                  onPress={() => {
                    setNameDialog(false);
                  }}
                  key="button-1"
              />
            </View>
          </DialogContent>
        </Dialog>

        <KeyboardAwareScrollView style={{ backgroundColor: "white", flexGrow: 1, width: "100%" }}>
          <Formik
              initialValues={{
                Name: Name,
                Occupation: Occupation,
                Dob: Dob,
                Street: Street,
                House: House,
                City: City,
                PostalCode: PostalCode,
                PhoneNumber: PhoneNumber,
              }}
              validationSchema={signUpSchema}
              onSubmit={(values, actions) => {
                createUserFun(values);
                // console.log(values);
                // actions.resetForm();
              }}
          >
            {({
                values,
                errors,
                touched,
                isValid,
                handleChange,
                handleBlur,
                isSubmitting,
                handleSubmit,
              }) => (
                <View style={styles.mainView}>
                  <Text
                      style={{ marginLeft: "6%", color: "#1c5bd9", marginTop: "5%" }}
                  >
                    Complete most recent notice including the calculation form
                  </Text>
                </View>
            )}
          </Formik>

        </KeyboardAwareScrollView>
        <ButtonBar next={'End_Screen'} />
      </View>
  );
};

export default Part_A_Legal_Rep_Info;
