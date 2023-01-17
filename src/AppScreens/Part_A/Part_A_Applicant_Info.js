import {View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert, LogBox, Button, FlatList} from "react-native";
import React, {useEffect, useState} from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//Redux
import { useSelector, useDispatch } from "react-redux";
import {modifyResponses, selectResponses} from "../../redux/slice/formSlice";

//Components
import ButtonBar from "../../Components/shared/ButtonBar";

import { Ionicons } from "@expo/vector-icons";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  ScaleAnimation,
} from "react-native-popup-dialog";
import styles from "../../styles/style_in";
import { Formik } from "formik";
import * as Yup from "yup";
import * as Progress from "react-native-progress";
import Theme from "../../utils/Theme";
import Header from "../../Components/shared/Header";
import {global} from "../../styles/shared/global";
import {useSafeAreaInsets} from "react-native-safe-area-context";


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
const Part_A_Applicant_Info = ({ navigation }) => {

  //Safe are view
  const insets = useSafeAreaInsets();

  //Redux
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



  const saveState = (values) => {
      dispatch(modifyResponses(values));
   };

  return (
      <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>

        <Header txt={"Part A - Personal Information"}/>

        <Dialog onTouchOutside={() => {setNameDialog(false);}}
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
        {/* //for Occupation */}

        <Dialog
          onTouchOutside={() => {
            setOccDialog(false);
          }}
          width={0.9}
          visible={occDialog}
          dialogAnimation={new ScaleAnimation()}
          onHardwareBackPress={() => {
            setOccDialog(false);
            console.log("onHardwareBackPress");
            return true;
          }}
          dialogTitle={
            <DialogTitle
              title="Info Box For Occupation Field
                  "
              hasTitleBar={false}
            />
          }
          actions={[
            <DialogButton
              text="DISMISS"
              onPress={() => {
                setOccDialog(false);
              }}
              key="button-1"
            />,
          ]}
        >
          <DialogContent>
            <View>
              <Text style={{ marginBottom: "2%" }}>
                Here you have to input your Occupation for which you are
                working....
              </Text>
              <Button
                title="Close"
                onPress={() => {
                  setOccDialog(false);
                }}
                key="button-1"
              />
            </View>
          </DialogContent>
        </Dialog>
        {/* //for Dob */}
        <Dialog
          onTouchOutside={() => {
            setDobDialog(false);
          }}
          width={0.9}
          visible={dobDialog}
          dialogAnimation={new ScaleAnimation()}
          onHardwareBackPress={() => {
            setDobDialog(false);
            console.log("onHardwareBackPress");
            return true;
          }}
          dialogTitle={
            <DialogTitle
              title="Info Box For Date of Birth Field
                  "
              hasTitleBar={false}
            />
          }
          actions={[
            <DialogButton
              text="DISMISS"
              onPress={() => {
                setDobDialog(false);
              }}
              key="button-1"
            />,
          ]}
        >
          <DialogContent>
            <View>
              <Text style={{ marginBottom: "2%" }}>
                Here you have to input your exact DATE of BIRTH (MM/DD/YY) in
                this form, by keeping in consider the documents...
              </Text>
              <Button
                title="Close"
                onPress={() => {
                  setDobDialog(false);
                }}
                key="button-1"
              />
            </View>
          </DialogContent>
        </Dialog>
        {/* //for Address Field */}
        <Dialog
          onTouchOutside={() => {
            setAddDialog(false);
          }}
          width={0.9}
          visible={addDialog}
          dialogAnimation={new ScaleAnimation()}
          onHardwareBackPress={() => {
            setAddDialog(false);
            console.log("onHardwareBackPress");
            return true;
          }}
          dialogTitle={
            <DialogTitle
              title="Info Box For Address Field
                  "
              hasTitleBar={false}
            />
          }
          actions={[
            <DialogButton
              text="DISMISS"
              onPress={() => {
                setAddDialog(false);
              }}
              key="button-1"
            />,
          ]}
        >
          <DialogContent>
            <View>
              <Text style={{ marginBottom: "2%" }}>
                Here you have to input your exact Address (Street no,House
                no,City and PostalCode) in this form, by keeping in consider the
                documents...
              </Text>
              <Button
                title="Close"
                onPress={() => {
                  setAddDialog(false);
                }}
                key="button-1"
              />
            </View>
          </DialogContent>
        </Dialog>
        {/* //for Phone number */}
        <Dialog
          onTouchOutside={() => {
            setPhoneDialog(false);
          }}
          width={0.9}
          visible={phoneDialog}
          dialogAnimation={new ScaleAnimation()}
          onHardwareBackPress={() => {
            setPhoneDialog(false);
            console.log("onHardwareBackPress");
            return true;
          }}
          dialogTitle={
            <DialogTitle
              title="Info Box For Phone Number
                  "
              hasTitleBar={false}
            />
          }
          actions={[
            <DialogButton
              text="DISMISS"
              onPress={() => {
                setPhoneDialog(false);
              }}
              key="button-1"
            />,
          ]}
        >
          <DialogContent>
            <View>
              <Text style={{ marginBottom: "2%" }}>
                Here you have to input your exact Phone Number, by keeping in
                consider the documents...
              </Text>
              <Button
                title="Close"
                onPress={() => {
                  setPhoneDialog(false);
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
              saveState(values);
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

              <Text style={{ paddingLeft: "6%", color: "#1c5bd9", marginTop: "5%" }}>What is your name?</Text>
              <View style={styles.textinputconatiner}>
                <TextInput
                  placeholderTextColor={"#87CEEB"}
                  cursorColor="#d75f4f"
                  placeholder="Input your Text in here"
                  style={styles.txtinput}
                  value={values.Name}
                  onChangeText={handleChange("Name")}
                  onBlur={handleBlur("Name")}
                />
                <TouchableOpacity onPress={() => setNameDialog(true)}>
                  <Ionicons name="information-circle-outline"
                    size={25}
                    style={{ padding: 10 }}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 10,
                  color: "red",
                  margin: "1%",
                  marginLeft: "6%",
                }}
              >
                {touched.Name && errors.Name}
              </Text>
              <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                What is your Occupation?
              </Text>
              <View style={styles.textinputconatiner}>
                <TextInput
                  placeholderTextColor={"#87CEEB"}
                  cursorColor="#d75f4f"
                  style={styles.txtinput}
                  placeholder="Input your Text in here"
                  value={values.Occupation}
                  onChangeText={handleChange("Occupation")}
                  onBlur={handleBlur("Occupation")}
                />
                <TouchableOpacity onPress={() => setOccDialog(true)}>
                  <Ionicons
                    name="information-circle-outline"
                    size={25}
                    style={{ padding: 10 }}
                  ></Ionicons>
                </TouchableOpacity>
              </View>

              <Text
                style={{
                  fontSize: 10,
                  color: "red",
                  margin: "1%",
                  marginLeft: "6%",
                }}
              >
                {touched.Occupation && errors.Occupation}
              </Text>
              <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                What is your date of birth?
              </Text>
              <View style={styles.textinputconatiner}>
                <TextInput
                  placeholderTextColor={"#87CEEB"}
                  cursorColor="#d75f4f"
                  style={styles.txtinput}
                  placeholder="Input your Text in here"
                  value={values.Dob}
                  onChangeText={handleChange("Dob")}
                  onBlur={handleBlur("Dob")}
                />
                <TouchableOpacity onPress={() => setDobDialog(true)}>
                  <Ionicons
                    name="information-circle-outline"
                    size={25}
                    style={{ padding: 10 }}
                  ></Ionicons>
                </TouchableOpacity>
              </View>

              <Text
                style={{
                  fontSize: 10,
                  color: "red",
                  margin: "1%",
                  marginLeft: "6%",
                }}
              >
                {touched.Dob && errors.Dob}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignContent: "center",
                  // justifyContent: 'space-between',
                }}
              >
                <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                  What is your address?
                </Text>
                <TouchableOpacity onPress={() => setAddDialog(true)}>
                  <Ionicons
                    name="information-circle-outline"
                    size={25}
                    style={{ padding: 1 }}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginLeft: "2%" }}>
                  <TextInput
                    placeholderTextColor={"#87CEEB"}
                    cursorColor="#d75f4f"
                    style={styles.txtinputAddress}
                    placeholder="Street"
                    value={values.Street}
                    onChangeText={handleChange("Street")}
                    onBlur={handleBlur("Street")}
                  />

                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                      margin: "1%",
                      marginLeft: "5%",
                    }}
                  >
                    {touched.Street && errors.Street}
                  </Text>
                </View>
                <View>
                  <TextInput
                    cursorColor="#d75f4f"
                    placeholderTextColor={"#87CEEB"}
                    style={styles.txtinputHouse}
                    placeholder="House Nr"
                    value={values.House}
                    onChangeText={handleChange("House")}
                    onBlur={handleBlur("House")}
                  />

                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                      margin: "1%",
                      marginLeft: "5%",
                    }}
                  >
                    {touched.House && errors.House}
                  </Text>
                </View>
              </View>
              <View style={{ flexDirection: "row" }}>
                <View style={{ flexDirection: "column", marginLeft: "2%" }}>
                  <TextInput
                    cursorColor="#d75f4f"
                    placeholderTextColor={"#87CEEB"}
                    style={styles.txtinputCity}
                    placeholder="City"
                    value={values.City}
                    onChangeText={handleChange("City")}
                    onBlur={handleBlur("City")}
                  />

                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                      margin: "1%",
                      marginLeft: "5%",
                    }}
                  >
                    {touched.City && errors.City}
                  </Text>
                </View>
                <View style={{ flexDirection: "column", marginLeft: "1%" }}>
                  <TextInput
                    cursorColor="#d75f4f"
                    placeholderTextColor={"#87CEEB"}
                    style={styles.txtinputPostalCode}
                    placeholder="Postal Code"
                    value={values.PostalCode}
                    onChangeText={handleChange("PostalCode")}
                    onBlur={handleBlur("PostalCode")}
                  />

                  <Text
                    style={{
                      fontSize: 10,
                      color: "red",
                      margin: "1%",
                      marginLeft: "5%",
                    }}
                  >
                    {touched.PostalCode && errors.PostalCode}
                  </Text>
                </View>
              </View>
              <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                What is your phone number?
              </Text>
              <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                <TextInput
                  placeholderTextColor={"#87CEEB"}
                  cursorColor="#d75f4f"
                  placeholder="Input your Text in here"
                  style={styles.txtinput}
                  value={values.PhoneNumber}
                  onChangeText={handleChange("PhoneNumber")}
                  onBlur={handleBlur("PhoneNumber")}
                />
                <TouchableOpacity onPress={() => setPhoneDialog(true)}>
                  <Ionicons
                    name="information-circle-outline"
                    size={25}
                    style={{ paddingVertical: 20, marginLeft: "10%" }}
                  ></Ionicons>
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  fontSize: 10,
                  color: "red",
                  margin: "1%",
                  marginLeft: "5%",
                }}
              >
                {touched.PhoneNumber && errors.PhoneNumber}
              </Text>
                <ButtonBar next={'Part_A_Dec_Legal_Rep'} submit={handleSubmit}/>
            </View>
          )}
        </Formik>
        </KeyboardAwareScrollView>
    </View>
  );
};

export default Part_A_Applicant_Info;
