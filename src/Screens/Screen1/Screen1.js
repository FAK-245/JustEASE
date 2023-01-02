import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import React, { useState } from "react";
import styles from "./style";
import { Formik } from "formik";
import * as Yup from "yup";
import Theme from "../../utils/Theme";
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
const Signup = ({ navigation }) => {
  // const {t, i18n} = useTranslation();
  const [Name, setName] = useState("");
  const [Occupation, setOccupation] = useState("");
  const [Dob, setDob] = useState("");
  const [Street, setStreet] = useState("");
  const [House, setHouse] = useState("");
  const [City, setCity] = useState("");
  const [PostalCode, setPostalCode] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");
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
    <View style={{ flex: 1, paddingBottom: "13%" }}>
      <ScrollView style={{ backgroundColor: "white", flexGrow: 1 }}>
        <Formik
          initialValues={{
            Name: Name,
            Occupation: Occupation,
            Dob: Dob,
            Street: Street,
            House: House,
            City: City,
            PostalCode: PostalCode,
            PhoneNumber: PhoneNumber,
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
              <View style={{ marginTop: "5%" }}>
                <View
                  style={{
                    backgroundColor: "#3243f7",
                    // opacity: 0.6,
                    height: Theme.hp("0.8%"),
                    width: Theme.wp("15%"),
                    alignSelf: "center",
                  }}
                ></View>
              </View>

              <Text
                style={{ marginLeft: "6%", color: "#1c5bd9", marginTop: "5%" }}
              >
                What is your name?
              </Text>
              <TextInput
                placeholderTextColor={"#87CEEB"}
                cursorColor="blue"
                placeholder="Input your Text in here"
                style={styles.txtinput}
                value={values.Name}
                onChangeText={handleChange("Name")}
                onBlur={handleBlur("Name")}
              />

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
              <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                What is your Occupation?
              </Text>
              <TextInput
                placeholderTextColor={"#87CEEB"}
                cursorColor="#d75f4f"
                style={styles.txtinput}
                placeholder="Input your Text in here"
                value={values.Occupation}
                onChangeText={handleChange("Occupation")}
                onBlur={handleBlur("Occupation")}
              />

              <Text
                style={{
                  fontSize: 10,
                  color: "red",
                  margin: "1%",
                  marginLeft: "6%",
                }}
              >
                {touched.Occupation && errors.Occupation}
              </Text>
              <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                What is your date of birth?
              </Text>
              <TextInput
                placeholderTextColor={"#87CEEB"}
                cursorColor="#d75f4f"
                style={styles.txtinput}
                placeholder="Input your Text in here"
                value={values.Dob}
                onChangeText={handleChange("Dob")}
                onBlur={handleBlur("Dob")}
              />

              <Text
                style={{
                  fontSize: 10,
                  color: "red",
                  margin: "1%",
                  marginLeft: "6%",
                }}
              >
                {touched.Dob && errors.Dob}
              </Text>
              <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                What is your address?
              </Text>
              <View style={{ flexDirection: "row" }}>
                <View style={{ marginLeft: "2%" }}>
                  <TextInput
                    placeholderTextColor={"#87CEEB"}
                    cursorColor="#d75f4f"
                    style={styles.txtinputAddress}
                    placeholder="Street"
                    value={values.Street}
                    onChangeText={handleChange("Street")}
                    onBlur={handleBlur("Street")}
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
                    value={values.House}
                    onChangeText={handleChange("House")}
                    onBlur={handleBlur("House")}
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
                    value={values.City}
                    onChangeText={handleChange("City")}
                    onBlur={handleBlur("City")}
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
                    value={values.PostalCode}
                    onChangeText={handleChange("PostalCode")}
                    onBlur={handleBlur("PostalCode")}
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
              <Text
                style={{ marginLeft: "6%", color: "#1c5bd9", marginTop: "5%" }}
              >
                What is your phone number?
              </Text>
              <TextInput
                placeholderTextColor={"#87CEEB"}
                cursorColor="blue"
                placeholder="Input your Text in here"
                style={styles.txtinput}
                value={values.PhoneNumber}
                onChangeText={handleChange("PhoneNumber")}
                onBlur={handleBlur("PhoneNumber")}
              />

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

              <Text
                style={{ marginLeft: "6%", color: "#1c5bd9", marginTop: "4%" }}
              >
                Do you have a legal representative?
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity
                  style={styles.yes}
                  onPress={() => navigation.navigate("Screen2")}
                >
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      margin: 5,
                      fontWeight: "500",
                    }}
                  >
                    Yes
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.no}>
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      margin: 5,
                      fontWeight: "500",
                    }}
                  >
                    No
                  </Text>
                </TouchableOpacity>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <TouchableOpacity style={styles.back}>
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      margin: 10,
                      fontWeight: "500",
                    }}
                  >
                    Back
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.next}>
                  <Text
                    style={{
                      color: "white",
                      textAlign: "center",
                      margin: 10,
                      fontWeight: "500",
                    }}
                  >
                    Next
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          )}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default Signup;
