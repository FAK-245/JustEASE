import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  LogBox,
  Button,
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogButton,
  ScaleAnimation,
} from "react-native-popup-dialog";
import React, { useState } from "react";
import styles from "../../styles/style_in";
import { Formik } from "formik";
import * as Yup from "yup";
import Part_B_Dec_Insurance from "../Part_B/Part_B_Dec_Insurance"
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {global} from "../../styles/shared/global";
import Header from "../../Components/shared/Header";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import ButtonBar from "../../Components/shared/ButtonBar";
import {modifyResponses} from "../../redux/slice/formSlice";

const signUpSchema = Yup.object({
  RepName: Yup.string()
    .min(0, "Minimum Input")
    .required("Required Field")
    .max(30, "Limit Exceed"),
  RepOccupation: Yup.string()
    .required("Required Field")
    .min(0, "Minimum Input")
    .max(30, "Limit Exceed"),
  RepStreet: Yup.string()
    .min(0)
    .required("Required Field")
    .max(20, "Limit Exceed"),
  RepHouse: Yup.string().min(0).required("Required Field").max(20, "Limit Exceed"),
  RepCity: Yup.string().min(0).required("Required Field").max(20, "Limit Exceed"),
  RepPostalCode: Yup.string()
    .min(0)
    .required("Required Field")
    .max(20, "Limit Exceed"),
  RepPhoneNumber: Yup.string()
    .min(0)
    .required("Required Field")
    .max(20, "Limit Exceed"),
});
LogBox.ignoreAllLogs();
const Part_A_Legal_Rep_Info = ({ navigation }) => {

  //Safe are view
  const insets = useSafeAreaInsets();

  const dispatch = useDispatch();


  const [RepName, setName] = useState("");
  const [RepOccupation, setOccupation] = useState("");
  const [RepStreet, setStreet] = useState("");
  const [RepHouse, setHouse] = useState("");
  const [RepCity, setCity] = useState("");
  const [RepPostalCode, setPostalCode] = useState("");
  const [RepPhoneNumber, setPhoneNumber] = useState("");
  //for dialog boxes
  const [occDialog, setOccDialog] = useState(false);
  const [nameDialog, setNameDialog] = useState(false);
  const [dobDialog, setDobDialog] = useState(false);
  const [phoneDialog, setPhoneDialog] = useState(false);
  const [addDialog, setAddDialog] = useState(false);


  const saveState = (values) => {
        console.log(values);
        dispatch(modifyResponses(values));
  };

  

  return (
      <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>

        <Header txt={"Part A - Legal Rep. Information"}/>

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
              title="Info Box For Name Field"
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
              RepName: RepName,
              RepOccupation: RepOccupation,
              RepStreet: RepStreet,
              RepHouse: RepHouse,
              RepCity: RepCity,
              RepPostalCode: RepPostalCode,
              RepPhoneNumber: RepPhoneNumber,
          }}
          validationSchema={signUpSchema}
          onSubmit={(values, actions) => {
              console.log(values)
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

              <Text style={{ marginLeft: "6%", color: "#1c5bd9", marginTop: "5%" }}>
                What is his/her name?
              </Text>
              <View style={styles.textinputconatiner}>
                <TextInput
                  placeholderTextColor={"#87CEEB"}
                  cursorColor="#d75f4f"
                  placeholder="Input your Text in here"
                  style={styles.txtinput}
                  value={values.RepName}
                  onChangeText={handleChange("RepName")}
                  onBlur={handleBlur("RepName")}
                />
                <TouchableOpacity onPress={() => setNameDialog(true)}>
                  <Ionicons
                    name="information-circle-outline"
                    size={25}
                    style={{ padding: 10 }}
                  ></Ionicons>
                </TouchableOpacity>
              </View>

                <Text style={{ marginLeft: "6%", color: "#1c5bd9", marginTop: "5%" }}>
                    What is his/her occupation?
                </Text>
                <View style={styles.textinputconatiner}>
                    <TextInput
                        placeholderTextColor={"#87CEEB"}
                        cursorColor="#d75f4f"
                        placeholder="Input your Text in here"
                        style={styles.txtinput}
                        value={values.RepOccupation}
                        onChangeText={handleChange("RepOccupation")}
                        onBlur={handleBlur("RepOccupation")}
                    />
                    <TouchableOpacity onPress={() => setNameDialog(true)}>
                        <Ionicons
                            name="information-circle-outline"
                            size={25}
                            style={{ padding: 10 }}
                        ></Ionicons>
                    </TouchableOpacity>
                </View>

              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  alignContent: "center",
                  // justifyContent: 'space-between',
                }}
              >
                <Text style={{ marginLeft: "6%", color: "#1c5bd9", marginTop: "5%" }}>
                  What is his/her address?
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
                    value={values.RepStreet}
                    onChangeText={handleChange("RepStreet")}
                    onBlur={handleBlur("RepStreet")}
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
                    value={values.RepHouse}
                    onChangeText={handleChange("RepHouse")}
                    onBlur={handleBlur("RepHouse")}
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
                    value={values.RepCity}
                    onChangeText={handleChange("RepCity")}
                    onBlur={handleBlur("RepCity")}
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
                    value={values.RepPostalCode}
                    onChangeText={handleChange("RepPostalCode")}
                    onBlur={handleBlur("RepPostalCode")}
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
                What is his/her phone number?
              </Text>
              <View style={{ flexDirection: "row", marginLeft: "5%" }}>
                <TextInput
                  placeholderTextColor={"#87CEEB"}
                  cursorColor="#d75f4f"
                  placeholder="Input your Text in here"
                  style={styles.txtinput}
                  value={values.RepPhoneNumber}
                  onChangeText={handleChange("RepPhoneNumber")}
                  onBlur={handleBlur("RepPhoneNumber")}
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

                <ButtonBar next={'Part_B_Dec_Answer_Insurance'} submit={handleSubmit}/>
            </View>
          )}
        </Formik>

        </KeyboardAwareScrollView>
    </View>
  );
};

export default Part_A_Legal_Rep_Info;
