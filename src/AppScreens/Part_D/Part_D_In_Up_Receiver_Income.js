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
import React, {useState, useEffect} from "react";
import {Ionicons} from "@expo/vector-icons";
import {AntDesign} from "@expo/vector-icons";
import {useSelector, useDispatch} from "react-redux";
import {addTodo} from "../../redux/action";

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
import {Formik} from "formik";
import styles from "../../styles/style_up_options";
import {printToFileAsync} from "expo-print";
import {shareAsync} from "expo-sharing";
import * as ImagePicker from "expo-image-picker";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {SafeAreaView} from "react-native-safe-area-context";
import Part_D_Dec_Add_Person from "./Part_D_Dec_Add_Person";

const signUpSchema = Yup.object({
    Name: Yup.string()
        .min(0, "Minimum Input")
        .required("Required Field")
        .max(30, "Limit Exceed"),
});
const Part_D_In_Up_Receiver_Income = ({navigation}) => {
    const todoList = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);
    const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);
    const [slideAnimationDialog, setSlideAnimationDialog] = useState(false);
    const [hasGalleryPermission, sethasGalleryPermissin] = useState(null);
    const [image, setImage] = useState(null);
    const [Name, setName] = useState("");

    useEffect(() => {
        (async () => {
            const galleryStatus =
                await ImagePicker.requestMediaLibraryPermissionsAsync(
                    dispatch(todoList)
                );
            sethasGalleryPermissin(galleryStatus.status === "granted");
        })();
    }, []);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);

        if (!result.canceled) {
            setImage(result.uri);
        }
    };
    if (hasGalleryPermission === false) {
        return <Text>no access to internal storage</Text>;
    }


    // console.log(todoList, "d")
    console.log(todoList, "d");

    const createUserFun = (values) => {
        setName(values.Name);
        if (values != "") {
            dispatch(
                addTodo({
                    Screen3: values.Name,
                    image: image,
                    image2: image2,
                    name: todoList.name,
                    occupation: todoList.occupation,
                    dob: todoList.dob,
                    street: todoList.street,
                    house: todoList.house,
                    city: todoList.city,
                    code: todoList.code,
                    number: todoList.number
                })
            );

            Alert.alert(
                "Personal Informaton Submitted!",
                "Press Ok to go on Next Part",
                [
                    {
                        text: "Cancel",
                        onPress: () => console.log("Cancel Pressed"),
                        style: "cancel",
                    },
                    {text: "OK", onPress: () => navigation.navigate("Screen4")},
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
                    style={{flex: 1, backgroundColor: "white", paddingBottom: "14.7%"}}
                >
                    <ScrollView style={{flexGrow: 1}}>
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
                                    title="Info Box For Monthly Gross
                  "
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
                                    <Text style={{marginBottom: "2%"}}>
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
                            <Text style={styles.signuptxt}>Part D - </Text>
                            <Text style={styles.signuptxt1}>Maintenance Obligations</Text>
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
                                //  values={Name}
                                //  onChangeText={(value) => setName(value)}
                            />
                            <TouchableOpacity onPress={() => setScaleAnimationDialog(true)}>
                                <Ionicons
                                    name="information-circle-outline"
                                    size={25}
                                    style={{padding: 10}}
                                ></Ionicons>
                            </TouchableOpacity>

                            {/* <Text
                style={{
                  fontSize: 10,
                  color: "red",
                  margin: "1%",
                  marginLeft: "8%",
                }}
              >
                {touched.Name && errors.Name}
              </Text> */}
                        </View>

                        <View style={{backgroundColor: "red"}}></View>
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
                        <View style={styles.textinputconatiner2}>
                            <View>
                                {/* <Text
                  style={{
                    color: "#1c5bd9",
                    marginLeft: "9%",
                    fontSize: RFValue(13, 580),
                    marginHorizontal: "2%",
                  }}
                >
                  Please upload the following documents here:
                </Text> */}
                            </View>
                            <View style={{margin: 10}}>
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

                                <TouchableOpacity
                                    style={styles.uploadimage}
                                    onPress={() => pickImage()}
                                >
                                    {image != null ?
                                        <Image
                                            style={styles.picker}
                                            source={{uri: image}}
                                        /> :
                                        <Ionicons
                                            name="images-outline"
                                            size={60}
                                            color="white"
                                            style={{alignSelf: "center", margin: 20,}}

                                        />}
                                    {/* {image && <Image source={{uri: image}} style={{flex: 1}} />} */}
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
                                    onPress={() => navigation.pop()}
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
                                            style={{margin: 5}}
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
                                <TouchableOpacity style={styles.next} onPress={() => navigation.navigate("Part_D_Dec_Add_Person")}>
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
                        {/* <Button title="Generate PDF" onPress={generatePdf} /> */}
                    </ScrollView>
                    <Progress.Bar progress={1} width={210} height={3}/>
                </View>
            )}
        </Formik>
    );
};

export default Part_D_In_Up_Receiver_Income;
