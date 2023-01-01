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
  // const [Dob, setDob] = useState("");
  // const [Street, setStreet] = useState("");

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
          // Dob: Dob,
          // Street: Street,
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
            <View>
              <Text>What is your name?</Text>
              <TextInput
                cursorColor="blue"
                // Usernameinput={true}
                placeholder="Input your Text in here"
                style={styles.txtinput}
                value={values.Name}
                onChangeText={handleChange("Name")}
                onBlur={handleBlur("Name")}
              />

              <Text style={{ fontSize: 10, color: "red", margin: "1%" }}>
                {touched.Name && errors.Name}
              </Text>
              <Text>What is your Occupation?</Text>
              <TextInput
                cursorColor="#d75f4f"
                // Emailinput={true}
                style={styles.txtinput}
                placeholder="Input your Text in here"
                value={values.Occupation}
                onChangeText={handleChange("Occupation")}
                onBlur={handleBlur("Occupation")}
              />

              <Text style={{ fontSize: 10, color: "red", margin: "1%" }}>
                {touched.Occupation && errors.Occupation}
              </Text>
              {/* <Animated.View
                entering={SlideInRight}
                layout={Layout.delay(300).easing()}
              >
                <Textinput
                  inputpassword={true}
                  placeholder={t("placeholderText.Password")}
                  returnKeyType={"done"}
                  secureTextEntry={isPasswordSecure1}
                  keyboardType={"default"}
                  onChangeText={handleChange("password")}
                  value={values.password}
                  iconName={isPasswordSecure1 ? "eye-off-sharp" : "eye"}
                  onEyePress={() => {
                    isPasswordSecure1
                      ? setIsPasswordSecure1(false)
                      : setIsPasswordSecure1(true);
                  }}
                  // onTap={() => eyeIconFun()}
                />
              </Animated.View>
              <Text style={{ fontSize: 10, color: "red", margin: "1%" }}>
                {touched.password && errors.password}
              </Text> */}
              {/* <Animated.View
                entering={SlideInRight}
                layout={Layout.delay(400).easing()}
              >
                <Textinput
                  confirminput={true}
                  placeholder={t("placeholderText.ConfirmPassword")}
                  value={values.confirmPassword}
                  onChangeText={handleChange("confirmPassword")}
                  onBlur={handleBlur("confirmPassword")}
                  secureTextEntry={isPasswordSecure}
                  iconName={isPasswordSecure ? "eye-off-sharp" : "eye"}
                  onEyePress={() => {
                    isPasswordSecure
                      ? setIsPasswordSecure(false)
                      : setIsPasswordSecure(true);
                  }}
                />
              </Animated.View>
              <Text style={{ fontSize: 10, color: "red", margin: "1%" }}>
                {touched.confirmPassword && errors.confirmPassword}
              </Text> */}
            </View>
          </View>
        )}
      </Formik>
    </ScrollView>
  );
};

export default Signup;
