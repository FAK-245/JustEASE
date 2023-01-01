import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
// import Animated, {
//   Layout,
//   FadeOut,
//   FadeIn,
//   FadeInDown,
//   ZoomIn,
//   SlideInRight,
//   SlideInLeft,
//   StretchInX,
//   StretchInY,
// } from 'react-native-reanimated';
import React, { useState } from "react";
import styles from "./style";
import { Formik } from "formik";
// import Ionicons from 'react-native-vector-icons/Ionicons';
import * as Yup from "yup";
// import petgram from '../../Assets/Images/mainlogo.png';
// import Textinput from "../../Components/Textinput/Textinput";
// import {useTranslation} from 'react-i18next';
// import auth from '@react-native-firebase/auth';
// import firestore from '@react-native-firebase/firestore';

import Theme from "../../utils/Theme";
// import Button from '../../Components/Button/Button';

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
});

const Signup = ({ navigation }) => {
  // const {t, i18n} = useTranslation();
  const [Name, setName] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [Dob, setDob] = useState("");
  const [Street, setStreet] = useState("");

  const createUserFun = (values) => {
    // alert('user registered succesfully!');
    Alert.alert("User Registered Succesfully!", "Press Ok to Login", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      { text: "OK", onPress: () => navigation.navigate("Home") },
    ]);
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
  return (
    <ScrollView style={{ backgroundColor: "white" }}>
      {/* <Ionicons
        name="arrow-back-outline"
        size={30}
        style={{color: '#d75f4f', margin: 10}}
        onPress={() => navigation.navigate('Base')}
      /> */}

      <Formik
        initialValues={{
          Name: Name,
          Occupation: Occupation,
          Dob: Dob,
          Street: Street,
        }}
        validationSchema={signUpSchema}
        onSubmit={(values, actions) => {
          createUserFun(values);
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
          <View style={styles.mainView}>
            <View style={styles.View1}>
              <Text style={styles.signuptxt}>Part A - </Text>
              <Text style={styles.signuptxt1}>Personal Information</Text>
            </View>
            <View style={styles.textinputconatiner}>
              <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                What is your name?
              </Text>
              <TextInput
                cursorColor="blue"
                placeholder="Input your Text in here"
                style={styles.txtinput}
                value={values.Name}
                onChangeText={handleChange("Name")}
                onBlur={handleBlur("Name")}
              />

              <Text style={{ fontSize: 10, color: "red", margin: "1%" }}>
                {touched.Name && errors.Name}
              </Text>
              <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                What is your Occupation?
              </Text>
              <TextInput
                cursorColor="#d75f4f"
                style={styles.txtinput}
                placeholder="Input your Text in here"
                value={values.Occupation}
                onChangeText={handleChange("Occupation")}
                onBlur={handleBlur("Occupation")}
              />

              <Text style={{ fontSize: 10, color: "red", margin: "1%" }}>
                {touched.Occupation && errors.Occupation}
              </Text>
              <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                What is your date of birth?
              </Text>
              <TextInput
                cursorColor="#d75f4f"
                style={styles.txtinput}
                placeholder="Input your Text in here"
                value={values.Dob}
                onChangeText={handleChange("Dob")}
                onBlur={handleBlur("Dob")}
              />

              <Text style={{ fontSize: 10, color: "red", margin: "1%" }}>
                {touched.Dob && errors.Dob}
              </Text>
              <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                What is your address?
              </Text>
              <View style={{ flexDirection: "row" }}>
                <TextInput
                  cursorColor="#d75f4f"
                  style={styles.txtinputAddress}
                  placeholder="Street"
                  value={values.Street}
                  onChangeText={handleChange("Street")}
                  onBlur={handleBlur("Street")}
                />

                <Text style={{ fontSize: 10, color: "red", margin: "1%" }}>
                  {touched.Street && errors.Street}
                </Text>
                <TextInput
                  cursorColor="#d75f4f"
                  style={styles.txtinputHouse}
                  placeholder="House Nr"
                  value={values.Street}
                  onChangeText={handleChange("Street")}
                  onBlur={handleBlur("Street")}
                />

                <Text style={{ fontSize: 10, color: "red", margin: "1%" }}>
                  {touched.Street && errors.Street}
                </Text>
              </View>
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default Signup;
