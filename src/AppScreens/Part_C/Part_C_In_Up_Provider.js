import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  LogBox,
  Button
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from "react-native-popup-dialog";
import React, { useState } from "react";
import styles from "../../styles/style_up";
import { Formik } from "formik";
import * as Yup from "yup";
import * as Progress from "react-native-progress";
import {global} from "../../styles/shared/global";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Header from "../../Components/shared/Header";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import ButtonBar from "../../Components/shared/ButtonBar";
import {modifyResponses} from "../../redux/slice/formSlice";
import {useDispatch} from "react-redux";

//TODO: Add Upload field
const signUpSchema = Yup.object({
  MaintenanceName: Yup.string()
    .min(0, "Minimum Input")
    .required("Required Field")
    .max(30, "Limit Exceed")
});
LogBox.ignoreAllLogs();
const Part_A_Applicant_Info = ({ navigation }) => {

  //Safe are view
  const insets = useSafeAreaInsets();

  const dispatch = useDispatch();

  const [MaintenanceName, setName] = useState("");
    //for dialog boxes
    const [occDialog, setOccDialog] = useState(false);
    const [nameDialog, setNameDialog] = useState(false);
    const [dobDialog, setDobDialog] = useState(false);
    const [phoneDialog, setPhoneDialog] = useState(false);
    const [addDialog, setAddDialog] = useState(false);

  const setState = (values) => {
      dispatch(modifyResponses({
          "Name des Unterhaltspflichtingen": values.MaintenanceName,
      }));
   };

  return (
      <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
        <Header txt={"Part C - Maintenance"}/>
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
            MaintenanceName: MaintenanceName,
          }}
          validationSchema={signUpSchema}
          onSubmit={(values, actions) => {
            setState(values);
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
                <Text style={{ marginLeft: "6%", color: "#1c5bd9", marginTop: "5%" }}>Name of the party maintenance is provided by?</Text>
                <View style={styles.textinputconatiner}>
                  <TextInput
                      placeholderTextColor={"#87CEEB"}
                      cursorColor="#d75f4f"
                      placeholder="Input your Text in here"
                      style={styles.txtinput}
                      value={values.MaintenanceName}
                      onChangeText={handleChange("MaintenanceName")}
                      onBlur={handleBlur("MaintenanceName")}
                  />
                  <TouchableOpacity onPress={() => setNameDialog(true)}>
                    <Ionicons
                        name="information-circle-outline"
                        size={25}
                        style={{ padding: 10 }}
                    ></Ionicons>
                  </TouchableOpacity>
                </View>
                <Text>File upload here</Text>
                  <ButtonBar next={'Part_D_Dec_Add_Person'} submit={handleSubmit}/>
            </View>
          )}
        </Formik>
        </KeyboardAwareScrollView>
        <Progress.Bar progress={1} width={50} height={3} />
    </View>
  );
};

export default Part_A_Applicant_Info;
