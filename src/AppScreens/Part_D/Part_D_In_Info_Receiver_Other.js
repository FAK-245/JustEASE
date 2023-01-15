import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
    Alert,
    LogBox,
    Button,
    FlatList
} from "react-native";

import {useSelector, useDispatch} from "react-redux";
import {addTodo} from "../../redux/action";
import {Ionicons} from "@expo/vector-icons";
import {printToFileAsync} from 'expo-print';
import {shareAsync} from 'expo-sharing';
import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
} from "react-native-popup-dialog";
import React, {useState} from "react";
import styles from "../../styles/style_in";
import {Formik} from "formik";
import * as Yup from "yup";
import * as Progress from "react-native-progress";
import Theme from "../../utils/Theme";
import Part_D_Dec_Receiver_Income from "./Part_D_Dec_Receiver_Income";
import Part_D_Dec_Maintenance_Obligations from "./Part_D_Dec_Maintenance_Obligations";

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
const Part_D_In_Info_Receiver_Other = ({navigation}) => {

    const todoList = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    // const {t, i18n} = useTranslation();
    const [Name, setName] = useState("");
    const [Occupation, setOccupation] = useState("");
    const [Dob, setDob] = useState("");
    const [Street, setStreet] = useState("");
    const [House, setHouse] = useState("");
    const [City, setCity] = useState("");
    const [PostalCode, setPostalCode] = useState("");
    const [PhoneNumber, setPhoneNumber] = useState("");
    //for dialog boxes
    const [occDialog, setOccDialog] = useState(false);
    const [nameDialog, setNameDialog] = useState(false);
    const [dobDialog, setDobDialog] = useState(false);
    const [phoneDialog, setPhoneDialog] = useState(false);
    const [addDialog, setAddDialog] = useState(false);


    // const html = `
    //   <html>
    //     <body>
    // <h1>Hi ${todoList.Name}</h1>
    // <h1>Hi ${todoList.occupation}</h1>
    // <h1>Hi ${todoList.dob}</h1>
    // <h1>Hi ${todoList.street}</h1>
    // <h1>Hi ${todoList.house}</h1>
    // <h1>Hi ${todoList.city}</h1>
    // <h1>Hi ${todoList.code}</h1>
    // <h1>Hi ${todoList.number}</h1>

    //       <p style="color: red;">Hello. Bonjour. Hola.</p>
    //     </body>
    //   </html>
    // `;


    // let generatePdf = async () => {
    //   const file = await printToFileAsync({
    //     html: html,
    //     base64: false
    //   });

    //   await shareAsync(file.uri);
    // };

    const createUserFun = (values) => {
        // console.log(values)
        // return
        if (values != "") {
            dispatch(addTodo({
                name: values.Name,
                occupation: values.Occupation,
                dob: values.Dob,
                street: values.Street,
                house: values.House,
                city: values.City,
                code: values.PostalCode,
                number: values.PhoneNumber




                // age:"123445",
            }))
            //  console.log(todoList)

            Alert.alert(
                "Personal Informaton Submitted!",
                "Press Ok to go on Next Part",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                    },
                    {text: "OK", onPress: () => navigation.navigate("Part_A_Legal_Rep_Decision")},
                ]
            );
        } else {
            Alert.alert("Please Complete your information!");
        }
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


    console.log(todoList)

    const handleAddTodo = () => {
        // dispatch(
        dispatch(addTodo({
            name: "N",
            age: "123445",
        }))
        //   addTodo(
        //     Name,
        //     // Occupation,
        //     // Dob,
        //     // Street,
        //     // House,
        //     // City,
        //     // PostalCode,
        //     // PhoneNumber
        //   )
        // );
        //  console.log(todoList)
        setName("");
        // setOccupation("");
        // setDob("");
        // setStreet("");
        // setHouse();
        // setCity("");
        // setPostalCode("");
        // setPhoneNumber("");
    };
    return (
        <View style={{flex: 1, paddingBottom: "14.5%", backgroundColor: "white"}}>
            <ScrollView style={{backgroundColor: "white", flexGrow: 1}}>
                {/* //For Name input */}
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
                            <Text style={{marginBottom: "2%"}}>
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
                            <Text style={{marginBottom: "2%"}}>
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
                            <Text style={{marginBottom: "2%"}}>
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
                            <Text style={{marginBottom: "2%"}}>
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
                            <Text style={{marginBottom: "2%"}}>
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
                        // console.log(values);
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
                                <Text style={styles.signuptxt}>Part D -</Text>
                                <Text style={styles.signuptxt1}>Maintenance Obligations</Text>
                            </View>

                            <Text
                                style={{marginLeft: "6%", color: "#1c5bd9", marginTop: "5%"}}
                            >
                                1.1) What is their last name?
                            </Text>
                            <View style={styles.textinputconatiner}>
                                <TextInput
                                    placeholderTextColor={"#87CEEB"}
                                    cursorColor="#d75f4f"
                                    placeholder="Input your Text in here"
                                    style={styles.txtinput}
                                    value={values.Name}
                                    onChangeText={handleChange("Name")}
                                    onBlur={handleBlur("Name")}
                                />
                                <TouchableOpacity onPress={() => setNameDialog(true)}>
                                    <Ionicons
                                        name="information-circle-outline"
                                        size={25}
                                        style={{padding: 10}}
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
                            <Text style={{marginLeft: "6%", color: "#1c5bd9"}}>
                                What is their forename?
                            </Text>
                            <View style={styles.textinputconatiner}>
                                <TextInput
                                    placeholderTextColor={"#87CEEB"}
                                    cursorColor="#d75f4f"
                                    style={styles.txtinput}
                                    placeholder="Input your Text in here"
                                    value={values.Occupation}
                                    onChangeText={handleChange("Occupation")}
                                    onBlur={handleBlur("Occupation")}
                                />
                                <TouchableOpacity onPress={() => setOccDialog(true)}>
                                    <Ionicons
                                        name="information-circle-outline"
                                        size={25}
                                        style={{padding: 10}}
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
                                {touched.Occupation && errors.Occupation}
                            </Text>
                            <Text style={{marginLeft: "6%", color: "#1c5bd9"}}>
                                What is their address? (if different than yours)
                            </Text>
                            <View style={styles.textinputconatiner}>
                                <TextInput
                                    placeholderTextColor={"#87CEEB"}
                                    cursorColor="#d75f4f"
                                    style={styles.txtinput}
                                    placeholder="Input your Text in here"
                                    value={values.Dob}
                                    onChangeText={handleChange("Dob")}
                                    onBlur={handleBlur("Dob")}
                                />
                                <TouchableOpacity onPress={() => setDobDialog(true)}>
                                    <Ionicons
                                        name="information-circle-outline"
                                        size={25}
                                        style={{padding: 10}}
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
                                {touched.Dob && errors.Dob}
                            </Text>


                            <Text style={{marginLeft: "6%", color: "#1c5bd9"}}>
                                1.2) When is the person born?
                            </Text>
                            <View style={{flexDirection: "row", marginLeft: "5%"}}>
                                <TextInput
                                    placeholderTextColor={"#87CEEB"}
                                    cursorColor="#d75f4f"
                                    placeholder="Input your Text in here"
                                    style={styles.txtinput}
                                    value={values.PhoneNumber}
                                    onChangeText={handleChange("PhoneNumber")}
                                    onBlur={handleBlur("PhoneNumber")}
                                />
                                <TouchableOpacity onPress={() => setPhoneDialog(true)}>
                                    <Ionicons
                                        name="information-circle-outline"
                                        size={25}
                                        style={{paddingVertical: 20, marginLeft: "10%"}}
                                    />
                                </TouchableOpacity>
                            </View>

                            <Text style={{marginLeft: "6%", color: "#1c5bd9"}}>
                                1.3) What is your relationship?(e.g. spouse, child, mother)
                            </Text>
                            <View style={{flexDirection: "row", marginLeft: "5%"}}>
                                <TextInput
                                    placeholderTextColor={"#87CEEB"}
                                    cursorColor="#d75f4f"
                                    placeholder="Input your Text in here"
                                    style={styles.txtinput}
                                    value={values.PhoneNumber}
                                    onChangeText={handleChange("PhoneNumber")}
                                    onBlur={handleBlur("PhoneNumber")}
                                />
                                <TouchableOpacity onPress={() => setPhoneDialog(true)}>
                                    <Ionicons
                                        name="information-circle-outline"
                                        size={25}
                                        style={{paddingVertical: 20, marginLeft: "10%"}}
                                    ></Ionicons>
                                </TouchableOpacity>

                            </View>

                            <Text style={{marginLeft: "6%", color: "#1c5bd9"}}>
                                1.4) What is the amount in € you pay monthly?
                            </Text>
                            <View style={{flexDirection: "row", marginLeft: "5%"}}>
                                <TextInput
                                    placeholderTextColor={"#87CEEB"}
                                    cursorColor="#d75f4f"
                                    placeholder="Input your Text in here"
                                    style={styles.txtinput}
                                    value={values.PhoneNumber}
                                    onChangeText={handleChange("PhoneNumber")}
                                    onBlur={handleBlur("PhoneNumber")}
                                />
                                <TouchableOpacity onPress={() => setPhoneDialog(true)}>
                                    <Ionicons
                                        name="information-circle-outline"
                                        size={25}
                                        style={{paddingVertical: 20, marginLeft: "10%"}}
                                    ></Ionicons>
                                </TouchableOpacity>

                            </View>

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


                            <View
                                style={{
                                    flexDirection: "row",
                                    justifyContent: "space-between",
                                }}
                            >
                                <TouchableOpacity style={styles.back} onPress={() => navigation.navigate("Part_D_Dec_Maintenance_Obligations")}>
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
                                            style={{margin: 5}}
                                        />
                                        <Text
                                            style={{
                                                color: "white",
                                                textAlign: "center",
                                                margin: 7,
                                                fontWeight: "500",
                                            }}
                                        >
                                            Back
                                        </Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.next}
                                    onPress={() => navigation.navigate("Part_D_Dec_Receiver_Income")}

                                    // onPress={() => navigation.navigate("Screen2")}
                                >
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
                                            style={{margin: 5}}
                                        />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </Formik>


                {/* <Button title="Generate PDF" onPress={generatePdf} /> */}

            </ScrollView>
            <Progress.Bar progress={1} width={50} height={3}/>
        </View>
    );
};

export default Part_D_In_Info_Receiver_Other;
