import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    LogBox,
    Button, Image
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
import {modifyImg, modifyResponses} from "../../redux/slice/formSlice";
import {useDispatch} from "react-redux";
import * as ImagePicker from "expo-image-picker";

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

    //Local state
    const [imgData, setImgData] = useState({active: false});

    //Image handling

    /**
     * @function (01) Open the image picker and assign this as a result
     *           (02) If the result has been canceled return and do not display images
     *           (03) Assign to local state
     */
    const pickImage = async () => {
        //01
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 0.5,
            base64: true,
            //allowsMultipleSelection: false
        });
        //02
        if (result.canceled) return
        //03
        setImgData({...result.assets[0], active: true});
        //04
        dispatch(modifyImg({"provider": `data:image/jpg;base64,${result.assets[0].base64}`}))
    };

    /**
     * @function (01) Reset to initial state
     */
    const removeImg = () => {
        //01
        setImgData({active: false})
    }

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
                  <TouchableOpacity activeOpacity={1} style={{
                      width: 200,
                      height: 200,
                      borderRadius: 16,
                      backgroundColor: "#F4F4F4",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      overflow: "hidden",
                      marginTop: "10%"
                  }
                  } onPress={() => pickImage()}>
                      {
                          imgData.active ? (
                              <>
                                  <Image source={{ uri: imgData.uri }} style={{width: "100%", height: "100%"}} />
                                  <TouchableOpacity style={{
                                      width: 30,
                                      height: 30,
                                      borderRadius: 30/2,
                                      position: "absolute",
                                      top: 5,
                                      right: 5,
                                      display: "flex",
                                      alignItems: "center",
                                      justifyContent: "center",
                                      backgroundColor: "white"
                                  }} onPress={() => removeImg()}>
                                      <Text>X</Text>
                                  </TouchableOpacity>
                              </>
                          ) : (
                              <Text>Upload</Text>
                          )
                      }
                  </TouchableOpacity>
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
