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
    CostCoverage: Yup.string()
      .min(0, "Minimum Input")
      .required("Required Field")
      .max(30, "Limit Exceed"),
});
LogBox.ignoreAllLogs();
const Part_A_Applicant_Info = ({ navigation }) => {

  //Safe are view
  const insets = useSafeAreaInsets();

  //Redux
  const dispatch = useDispatch();

  const [CostCoverage, setCostCoverage] = useState("");
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

        <Header txt={"Part B - Legal Protection"}/>

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

        <KeyboardAwareScrollView style={{ backgroundColor: "white", flexGrow: 1, width: "100%" }}>
          <Formik
              initialValues={{
                CostCoverage: CostCoverage,
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

                  <Text style={{ paddingLeft: "6%", color: "#1c5bd9", marginTop: "5%" }}>1.3) Up to what amount do they cover the cost?</Text>
                  <View style={styles.textinputconatiner}>
                    <TextInput
                        placeholderTextColor={"#87CEEB"}
                        cursorColor="#d75f4f"
                        placeholder="Input your Text in here"
                        style={styles.txtinput}
                        value={values.CostCoverage}
                        onChangeText={handleChange("CostCoverage")}
                        onBlur={handleBlur("CostCoverage")}
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
                  <Text style={{ paddingLeft: "6%", color: "#1c5bd9", marginTop: "5%" }}>Copy of confirmation</Text>
                  <ButtonBar next={'Part_B_Up_Insurance_Conf_Letter'} submit={handleSubmit}/>
                </View>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
  );
};

export default Part_A_Applicant_Info;
