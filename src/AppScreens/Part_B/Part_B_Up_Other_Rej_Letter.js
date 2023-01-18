import {View, Text, TextInput, TouchableOpacity, ScrollView, Image, Alert, LogBox, Button, FlatList} from "react-native";
import React, {useEffect, useState} from "react";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

//Redux
import { useSelector, useDispatch } from "react-redux";
import {modifyImg, modifyResponses, selectResponses} from "../../redux/slice/formSlice";

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
import * as ImagePicker from "expo-image-picker";


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
        dispatch(modifyImg({"other_rejection": `data:image/jpg;base64,${result.assets[0].base64}`}))
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
                  <Text style={{ paddingLeft: "6%", color: "#1c5bd9", marginTop: "5%" }}>Copy of rejection</Text>
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
                  <ButtonBar next={'Part_C_Dec_Maintenance_Claims'} submit={handleSubmit}/>
                </View>
            )}
          </Formik>
        </KeyboardAwareScrollView>
      </View>
  );
};

export default Part_A_Applicant_Info;
