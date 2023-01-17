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
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";

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
import * as ImagePicker from "expo-image-picker";
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
const Part_B_Up_Insurance = ({ navigation }) => {

  //Safe are view
  const insets = useSafeAreaInsets();

  const dispatch = useDispatch();
  const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);
  const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);
  const [slideAnimationDialog, setSlideAnimationDialog] = useState(false);
  const [hasGalleryPermission, sethasGalleryPermissin] = useState(null);
  const [hasGalleryPermission1, sethasGalleryPermissin1] = useState(null);
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [Name, setName] = useState("");



  const saveState = (values) => {
    /*
    dispatch(
         image :image,
         image2 :image2,
        })
      );

     */

  };

  return (
    <Formik
      initialValues={{
        Name: Name,
      }}
      validationSchema={signUpSchema}
      onSubmit={(values, actions) => {
        saveState(values);

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
                <View style={styles.textinputconatiner}>
                </View>
              </View>
            </ScrollView>
            <ButtonBar next={'Part_B_Dec_Contacted_Insurance'} submit={handleSubmit}/>
        </View>
      )}
    </Formik>
  );
};

export default Part_B_Up_Insurance;
