import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image
} from "react-native";
import React, {useState, useEffect} from "react";
import {global} from "../../styles/shared/global";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {StackActions, useNavigation} from "@react-navigation/native";
import BackButtonBar from "../../Components/shared/BackButtonBar";


const Screen5 = () => {

    //Safe are view
    const insets = useSafeAreaInsets();

    const navigation = useNavigation()

    return (
        <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
            <View style={[global.parentContainer, {
                paddingTop: insets.top,
                paddingBottom: insets.bottom,
                width: "100%",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
            }]}>
                <Text>Application unsuccessful</Text>
            </View>
            <BackButtonBar/>
        </View>
    );
};

export default Screen5;
