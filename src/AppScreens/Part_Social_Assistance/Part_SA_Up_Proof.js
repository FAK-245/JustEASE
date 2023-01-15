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
import styles from "../../styles/style_up";
import {printToFileAsync} from "expo-print";
import {shareAsync} from "expo-sharing";
import * as ImagePicker from "expo-image-picker";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {SafeAreaView} from "react-native-safe-area-context";

const signUpSchema = Yup.object({
    Name: Yup.string()
        .min(0, "Minimum Input")
        .required("Required Field")
        .max(30, "Limit Exceed"),
});
const Part_SA_Up_Proof = ({navigation}) => {
    const todoList = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [defaultAnimationDialog, setDefaultAnimationDialog] = useState(false);
    const [scaleAnimationDialog, setScaleAnimationDialog] = useState(false);
    const [slideAnimationDialog, setSlideAnimationDialog] = useState(false);
    const [hasGalleryPermission, sethasGalleryPermissin] = useState(null);
    const [hasGalleryPermission1, sethasGalleryPermissin1] = useState(null);
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [Name, setName] = useState("");
    // const [task, setTask] = React.useState("");

    // const handleAddTodo = () => {
    //   dispatch(addTodo(task));
    //   console.log(todoList)
    //   setTask("");
    // };

    // const html = `
    //   <html>
    //     <body>
    //       <h1>Hi ${todoList.name}</h1>
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
    useEffect(() => {
        (async () => {
            const galleryStatus =
                await ImagePicker.requestMediaLibraryPermissionsAsync(
                    dispatch(todoList)
                );
            sethasGalleryPermissin(galleryStatus.status === "granted");
        })();
    }, []);
    useEffect(() => {
        (async () => {
            const galleryStatus =
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            sethasGalleryPermissin1(galleryStatus.status === "granted");
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

    const pickSecondImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,


        })


        if (!result.canceled) {
            setImage2(result.uri);
        }
        console.log(result.uri, "heloo")

    };
    if (hasGalleryPermission1 === false) {
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


                    // Screen3: values.Name,
                    // name: todoList.name,
                    // occupation: todoList.occupation,
                    // dob: todoList.dob,
                    // street: todoList.street,
                    // house: todoList.house,
                    // city: todoList.city,
                    // code: todoList.code,
                    // number: todoList.number,

                    // age:"123445",
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

    // let options = {
    //   saveToPhotos: true,
    //   mediaType: 'photo',
    // };
    // const openGallery = async () => {
    //   const result = await ImagePicker(options);
    //   setGalleryPhoto(result.assets[0].uri);

    // };

    //  console.log(todoList.name);
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
                            <Text style={styles.signuptxt}>Special - </Text>
                            <Text style={styles.signuptxt1}>Social Assistance</Text>
                        </View>
                        <View style={styles.Line}/>

                        <Text
                            style={{
                                color: "#1c5bd9",
                                textAlign: "center",
                                fontSize: RFValue(13, 580),
                            }}
                        >
                            S) Complete most recent notice including the calculation form
                        </Text>


                        <TouchableOpacity onPress={() => setScaleAnimationDialog(true)}>
                            <Ionicons
                                name="information-circle-outline"
                                size={25}
                                style={{padding: 10}}
                            ></Ionicons>
                        </TouchableOpacity>


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

                            <View style={{margin: 10}}>


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
                                <TouchableOpacity style={styles.next} onPress={() => navigation.navigate("Part_SA_End_Receives_SA")}>
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

export default Part_SA_Up_Proof;
