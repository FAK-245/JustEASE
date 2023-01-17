import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    LogBox,
    Button
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import {modifyResponses} from "../../redux/slice/formSlice";
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
import styles from "../../styles/style_in";
import { Formik, useFormikContext } from "formik";
import * as Yup from "yup";
import {KeyboardAwareScrollView} from "react-native-keyboard-aware-scroll-view";
import {global} from "../../styles/shared/global";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Header from "../../Components/shared/Header";
import ButtonBar from "../../Components/shared/ButtonBar";


const signUpSchema = Yup.object({
    ROLName: Yup.string()
        .min(0, "Minimum Input")
        .required("Required Field")
        .max(30, "Limit Exceed"),
    ROFName: Yup.string()
        .required("Required Field")
        .min(0, "Minimum Input")
        .max(30, "Limit Exceed"),
    ROStreet: Yup.string().min(0).required("Required Field").max(30, "Limit Exceed"),
    RODob: Yup.string()
        .min(0)
        .required("Required Field")
        .max(20, "Limit Exceed"),
    RORelationship: Yup.string().min(0).required("Required Field").max(20, "Limit Exceed"),
});
LogBox.ignoreAllLogs();
const Part_A_Applicant_Info = ({ navigation }) => {

    //Safe are view
    const insets = useSafeAreaInsets();

    const dispatch = useDispatch();

    const [ROLName, setROLName] = useState("");
    const [ROFName, setFName] = useState("");
    const [ROStreet, setROStreet] = useState("");
    const [RODob, setRODob] = useState("");
    const [RORelationship, setRORelationship] = useState("");
    const [ROSum, setROSum] = useState("");
    //for dialog boxes
    const [occDialog, setOccDialog] = useState(false);
    const [nameDialog, setNameDialog] = useState(false);
    const [dobDialog, setDobDialog] = useState(false);
    const [phoneDialog, setPhoneDialog] = useState(false);
    const [addDialog, setAddDialog] = useState(false);

    const saveState = (values) => {
        dispatch(modifyResponses(values));
    };

    return (
        <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>

            <Header txt={"Part D - Maintenance II"}/>

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
                        ROLName: ROLName,
                        ROFName: ROFName,
                        ROStreet: ROStreet,
                        RODob: RODob,
                        RORelationship: RORelationship,
                        ROSum: ROSum
                    }}
                    validationSchema={signUpSchema}
                    onSubmit={(values, actions) => {
                        saveState(values);
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

                            <Text style={{ marginLeft: "6%", color: "#1c5bd9", marginTop: "5%" }}>
                                What is their last name?
                            </Text>
                            <View style={styles.textinputconatiner}>
                                <TextInput
                                    placeholderTextColor={"#87CEEB"}
                                    cursorColor="#d75f4f"
                                    placeholder="Input your Text in here"
                                    style={styles.txtinput}
                                    value={values.RCLName}
                                    onChangeText={handleChange("ROLName")}
                                    onBlur={handleBlur("ROLName")}
                                />
                                <TouchableOpacity onPress={() => setNameDialog(true)}>
                                    <Ionicons
                                        name="information-circle-outline"
                                        size={25}
                                        style={{ padding: 10 }}
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
                                {touched.RCLName && errors.RCLName}
                            </Text>
                            <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                                What is their forename?
                            </Text>
                            <View style={styles.textinputconatiner}>
                                <TextInput
                                    placeholderTextColor={"#87CEEB"}
                                    cursorColor="#d75f4f"
                                    style={styles.txtinput}
                                    placeholder="Input your Text in here"
                                    value={values.ROFName}
                                    onChangeText={handleChange("ROFName")}
                                    onBlur={handleBlur("ROFName")}
                                />
                                <TouchableOpacity onPress={() => setOccDialog(true)}>
                                    <Ionicons
                                        name="information-circle-outline"
                                        size={25}
                                        style={{ padding: 10 }}
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
                                {touched.RCFName && errors.RCFName}
                            </Text>
                            <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                                What is their address?
                            </Text>
                            <View style={styles.textinputconatiner}>
                                <TextInput
                                    placeholderTextColor={"#87CEEB"}
                                    cursorColor="#d75f4f"
                                    style={styles.txtinput}
                                    placeholder="Input your Text in here"
                                    value={values.ROStreet}
                                    onChangeText={handleChange("ROStreet")}
                                    onBlur={handleBlur("ROStreet")}
                                />
                                <TouchableOpacity onPress={() => setDobDialog(true)}>
                                    <Ionicons
                                        name="information-circle-outline"
                                        size={25}
                                        style={{ padding: 10 }}
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
                                {touched.ROStreet && errors.ROStreet}
                            </Text>

                            <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                                When is the person born
                            </Text>
                            <View style={styles.textinputconatiner}>
                                <TextInput
                                    placeholderTextColor={"#87CEEB"}
                                    cursorColor="#d75f4f"
                                    style={styles.txtinput}
                                    placeholder="Input your Text in here"
                                    value={values.RODob}
                                    onChangeText={handleChange("RODob")}
                                    onBlur={handleBlur("RODob")}
                                />
                                <TouchableOpacity onPress={() => setDobDialog(true)}>
                                    <Ionicons
                                        name="information-circle-outline"
                                        size={25}
                                        style={{ padding: 10 }}
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
                                {touched.RCDob && errors.RCDob}
                            </Text>

                            <Text style={{ marginLeft: "6%", color: "#1c5bd9" }}>
                                What is your relationship
                            </Text>
                            <View style={styles.textinputconatiner}>
                                <TextInput
                                    placeholderTextColor={"#87CEEB"}
                                    cursorColor="#d75f4f"
                                    style={styles.txtinput}
                                    placeholder="Input your Text in here"
                                    value={values.RORelationship}
                                    onChangeText={handleChange("RORelationship")}
                                    onBlur={handleBlur("RORelationship")}
                                />
                                <TouchableOpacity onPress={() => setDobDialog(true)}>
                                    <Ionicons
                                        name="information-circle-outline"
                                        size={25}
                                        style={{ padding: 10 }}
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
                                {touched.RORelationship && errors.RORelationship}
                            </Text>
                            <ButtonBar next={'Part_D_Dec_Receiver_Income'} submit={handleSubmit}/>
                        </View>
                    )}
                </Formik>


            </KeyboardAwareScrollView>
        </View>
    );
};

export default Part_A_Applicant_Info;
