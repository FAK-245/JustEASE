
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
import { addTodo } from "../../redux/action";
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
import {RFValue} from "react-native-responsive-fontsize";

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
const Part_C_Dec_Maintenance_Claims = ({ navigation }) => {

  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  // const {t, i18n} = useTranslation();
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



  // const html = `
  //   <html>
  //     <body>
        // <h1>Hi ${todoList.Name}</h1>
        // <h1>Hi ${todoList.occupation}</h1>
        // <h1>Hi ${todoList.dob}</h1>
        // <h1>Hi ${todoList.street}</h1>
        // <h1>Hi ${todoList.house}</h1>
        // <h1>Hi ${todoList.city}</h1>
        // <h1>Hi ${todoList.code}</h1>
        // <h1>Hi ${todoList.number}</h1>
        
  //       <p style="color: red;">Hello. Bonjour. Hola.</p>
  //     </body>
  //   </html>
  // `;

  
  // let generatePdf = async () => {
  //   const file = await printToFileAsync({
  //     html: html,
  //     base64: false
  //   });

  //   await shareAsync(file.uri);
  // };

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
  // auth()
  //   .createUserWithEmailAndPassword(values.email, values.password)
  //   .then(() => {
  //     firestore()
  //       .collection('Users')
  //       .doc(auth().currentUser.uid)
  //       .set({
  //         name: values.userName,
  //         email: values.email,
  //         // password: values.password,
  //       })
  //       .then(() => {
  //         console.log('User added!');
  //       })
  //       .catch(e => {
  //         console.log(e);
  //       });
  //     console.log('User account created & signed in!');
  //     alert('user registered successfully');
  //   })
  //   .catch(error => {
  //     if (error.code === 'auth/email-already-in-use') {
  //       console.log('That email address is already in use!');
  //     }

  //     if (error.code === 'auth/invalid-email') {
  //       console.log('That email address is invalid!');
  //     }

  //     console.error(error);
  //   });
   };

  
  console.log(todoList)

  const handleAddTodo = () => {
    // dispatch(
      dispatch(addTodo({
        name:"N",
        age:"123445",
      }))
    //   addTodo(
    //     Name,
    //     // Occupation,
    //     // Dob,
    //     // Street,
    //     // House,
    //     // City,
    //     // PostalCode,
    //     // PhoneNumber
    //   )
    // );
    //  console.log(todoList)
    setName("");
    // setOccupation("");
    // setDob("");
    // setStreet("");
    // setHouse();
    // setCity("");
    // setPostalCode("");
    // setPhoneNumber("");
  };
  return (
      <View style={{ flex: 1, paddingBottom: "14.7%", backgroundColor: "white" }}>
        <ScrollView>
          <View style={styles.View1}>
            <Text style={styles.Text1}>Part C -</Text>
            <Text style={styles.Text2}>Maintenance</Text>
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
                Do you have relatives who are obliged to pay maintenance to you (even if no actual payments are made)?
                e.g. mother, father, spouse/civil partner
              </Text>
            </View>
            <View style={styles.View3}>

              <TouchableOpacity style={styles.yes}  onPress={() => navigation.navigate("Part_C_In_Up_Provider")}>
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

              <TouchableOpacity style={styles.no} onPress={() => navigation.navigate("Part_D_Dec_Maintenance_Obligations")}>
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
                  onPress={() => navigation.navigate("Part_C_In_Up_Provider")}
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

export default Part_C_Dec_Maintenance_Claims;
