import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import * as ImagePicker from "expo-image-picker";
import styles from "./style";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { SafeAreaView } from "react-native-safe-area-context";

const Screen4 = ({ navigation }) => {
  const [hasGalleryPermission, sethasGalleryPermissin] = useState(null);
  const [image, setImage] = useState(null);

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

  const openCamera = async () => {
    // Ask the user for the permission to access the camera
    const permissionResult = await ImagePicker.requestCameraPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your camera!");
      return;
    }

    const result = await ImagePicker.launchCameraAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "white", paddingBottom: "14.7%" }}>
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={styles.View1}>
          <Text style={styles.signuptxt}>Part E - </Text>
          <Text style={styles.signuptxt1}>Gross Income</Text>
        </View>
        <View style={styles.Line}></View>

        <View style={styles.FlatView}>
          <Text style={styles.document1}>
            Choose how you want to upload your documents
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              // marginTop: "20%",
            }}
          >
            <TouchableOpacity>
              <MaterialIcons
                name="drive-folder-upload"
                size={89}
                color="black"
              />
              <Text style={{ textAlign: "center" }}>From file</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <MaterialIcons name="add-to-drive" size={89} color="black" />
              <Text>From google </Text>
              <Text style={{ textAlign: "center" }}> drive</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              marginTop: "20%",
            }}
          >
            <TouchableOpacity onPress={() => openCamera()}>
              <FontAwesome name="camera" size={70} color="black" />
              <Text style={{ marginRight: "1%" }}>Take a photo</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => pickImage()}>
              <Ionicons name="ios-images" size={70} color="black" />
              <Text style={{ textAlign: "center" }}>From gallery</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.textinputconatiner2}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity
              style={styles.back}
              onPress={() => navigation.navigate("Screen3")}
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
                  style={{ margin: 5 }}
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
            <TouchableOpacity
              style={styles.next}
              onPress={() => navigation.navigate("Screen5")}
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
                  style={{ margin: 5 }}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Progress.Bar progress={1} width={210} height={3} />
    </View>
  );
};

export default Screen4;
