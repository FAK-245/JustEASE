import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import * as Yup from "yup";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation,
} from "react-native-popup-dialog";
import { Formik } from "formik";
import styles from "./style";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";
const signUpSchema = Yup.object({
  Name: Yup.string()
    .min(0, "Minimum Input")
    .required("Required Field")
    .max(30, "Limit Exceed"),
});
const Screen3 = ({ navigation }) => {
  const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);
  const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);
  const [slideAnimationDialog, setSlideAnimationDialog] = useState(false);
  const [Name, setName] = useState("");

  const createUserFun = (values) => {
    if (values != "") {
      Alert.alert(
        "Personal Informaton Submitted!",
        "Press Ok to go on Next Part",
        [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          { text: "OK", onPress: () => navigation.navigate("Screen4") },
        ]
      );
    } else {
      Alert.alert("Please Complete your information!");
    }
  };
  return (
    <Formik
      initialValues={{
        Name: Name,
      }}
      validationSchema={signUpSchema}
      onSubmit={(values, actions) => {
        createUserFun(values);
        console.log(values);
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
        <View
          style={{ flex: 1, backgroundColor: "white", paddingBottom: "14.7%" }}
        >
          <ScrollView style={{ flexGrow: 1 }}>
            <Dialog
              onTouchOutside={() => {
                setScaleAnimationDialog(false);
              }}
              width={0.9}
              visible={scaleAnimationDialog}
              dialogAnimation={new ScaleAnimation()}
              onHardwareBackPress={() => {
                setScaleAnimationDialog(false);
                console.log("onHardwareBackPress");
                return true;
              }}
              dialogTitle={
                <DialogTitle
                  title="Scale Animation Dialog Sample"
                  hasTitleBar={false}
                />
              }
              actions={[
                <DialogButton
                  text="DISMISS"
                  onPress={() => {
                    setScaleAnimationDialog(false);
                  }}
                  key="button-1"
                />,
              ]}
            >
              <DialogContent>
                <View>
                  <Text>
                    Here is an example of scale animation dialog. Close using
                    back button press
                  </Text>
                  <Button
                    title="Close"
                    onPress={() => {
                      setScaleAnimationDialog(false);
                    }}
                    key="button-1"
                  />
                </View>
              </DialogContent>
            </Dialog>
            <View style={styles.View1}>
              <Text style={styles.signuptxt}>Part E - </Text>
              <Text style={styles.signuptxt1}>Gross Income</Text>
            </View>
            <View style={styles.Line}></View>

            <Text
                style={{
                  color: "#1c5bd9",
                  textAlign: "center",
                  fontSize: RFValue(13, 580),
                  
                }}
              >
                1.1) How much do you earn monthly in € (gross)?
              </Text>

            <View style={styles.textinputconatiner}>
            
             
              <TextInput
                placeholderTextColor={"#87CEEB"}
                cursorColor="blue"
                placeholder="Input your Text in here"
                style={styles.txtinput}
                onChangeText={handleChange("Name")}
                onBlur={handleBlur("Name")}
              />
              <TouchableOpacity onPress={() => setScaleAnimationDialog(true)}>
                <Ionicons
                  name="information-circle-outline"
                  size={25}
                ></Ionicons>
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 10,
                  color: "red",
                  margin: "1%",
                  marginLeft: "8%",
                }}
              >
                {touched.Name && errors.Name}
              </Text>
            </View>
            <View style={styles.textinputconatiner2}>
              <View>
                <Text
                  style={{
                    color: "#1c5bd9",
                    marginLeft: "9%",
                    fontSize: RFValue(13, 580),
                    marginHorizontal: "2%",
                  }}
                >
                  Please upload the following documents here:
                </Text>
              </View>
              <View style={{ margin: 10 }}>
                {/* <Text
                  style={{
                    marginHorizontal: "5%",
                    color: "#1c5bd9",
                    fontSize: RFValue(13, 580),
                    textAlign: "center",
                  }}
                >
                  E1-1.1) wage or salary slips from the workspace
                </Text> */}
                <Text
                  style={{
                    marginHorizontal: "2%",
                    color: "#1c5bd9",
                    fontSize: RFValue(13, 580),
                    textAlign: "center",
                    marginLeft: "6.5%",
                    marginRight: "6.5%",
                  }}
                >
                  E1-1.1) wage or salary slips from the workspace for the past
                  12 months proir to the application.
                </Text>

                <TouchableOpacity style={styles.uploadimage}>
                  <Ionicons
                    name="images-outline"
                    size={60}
                    color="white"
                    style={{ alignSelf: "center", margin: 20 }}
                  />
                </TouchableOpacity>
              </View>

              <View style={{ margin: 10 }}>
                {/* <Text
                  style={{
                    color: "#1c5bd9",
                    fontSize: RFValue(13, 580),
                    marginLeft: "6.5%",
                  }}
                >
                  E1-1.1b) Latest income tax notice from the tax
                </Text> */}
                <Text
                  style={{
                    textAlign: "center",
                    color: "#1c5bd9",
                    fontSize: RFValue(13, 580),
                    marginLeft: "6.5%",
                    marginRight: "6.5%",
                  }}
                >
                  E1-1.1b) Latest income tax notice from the tax office or
                  electronic wage tax certificate revealing gross and net income
                  of last year.
                </Text>
                {/* <Text
                  style={{
                    color: "#1c5bd9",
                    fontSize: RFValue(13, 580),
                    marginLeft: "6.5%",
                  }}
                >
                  revealing gross and net income of last year
                </Text> */}

                <TouchableOpacity style={styles.uploadimage}>
                  <Ionicons
                    name="images-outline"
                    size={60}
                    color="white"
                    style={{ alignSelf: "center", margin: 20 }}
                  />
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  //paddingTop: '10%'
                }}
              >
                <TouchableOpacity
                  style={styles.back}
                  onPress={() => navigation.navigate("Screen2")}
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
                <TouchableOpacity style={styles.next} onPress={handleSubmit}>
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
      )}
    </Formik>
  );
};

export default Screen3;
