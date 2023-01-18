import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Alert,
  Button,
  FlatList,
  Image,
} from "react-native";
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {modifyImg} from "../../redux/slice/formSlice";
import * as ImagePicker from "expo-image-picker";

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
import {global} from "../../styles/shared/global";
import Header from "../../Components/shared/Header";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import ButtonBar from "../../Components/shared/ButtonBar";
import styles from "../../styles/style_up";
const signUpSchema = Yup.object({
  Name: Yup.string()
    .min(0, "Minimum Input")
    .required("Required Field")
    .max(30, "Limit Exceed"),
});


const Part_B_Up_Insurance = ({}) => {

  //Safe are view
  const insets = useSafeAreaInsets();

  //Dispatch
  const dispatch = useDispatch();

  const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);
  const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);
  const [slideAnimationDialog, setSlideAnimationDialog] = useState(false);
  const [hasGalleryPermission, sethasGalleryPermissin] = useState(null);
  const [hasGalleryPermission1, sethasGalleryPermissin1] = useState(null);
  const [image, setImage] = useState(null);
  const [Name, setName] = useState("");


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
    dispatch(modifyImg({"insurance_proof": `data:image/jpg;base64,${result.assets[0].base64}`}))
  };

  /**
   * @function (01) Reset to initial state
   */
  const removeImg = () => {
    //01
    setImgData({active: false})
  }

  return (
    <Formik
      initialValues={{
        Name: Name,
      }}
      validationSchema={signUpSchema}
      onSubmit={(values, actions) => {
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
          <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>

            <Header txt={"Part B - Legal Protection"}/>
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
                  title="Info Box For Insurance Policy Document"
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
                  <Text style={{ marginBottom: "2%" }}>
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
              <View style={styles.mainView}>
                <Text style={{ marginLeft: "6%", color: "#1c5bd9", marginTop: "5%" }}>Please upload a copy of the insurance policy document</Text>

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

              </View>
            </ScrollView>
            <ButtonBar next={'Part_B_Dec_Contacted_Insurance'} submit={handleSubmit}/>
        </View>
      )}
    </Formik>
  );
};

export default Part_B_Up_Insurance;
