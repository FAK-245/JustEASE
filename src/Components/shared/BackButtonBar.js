import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'

//Navigation
import {StackActions, useNavigation} from "@react-navigation/native";

//Redux
import {useSelector} from "react-redux";
import {selectLanguage} from "../../redux/slice/settingSlice";
import {selectResponses} from "../../redux/slice/formSlice";

//Styles
import {Ionicons} from "@expo/vector-icons";
import { button } from "../../styles/shared/button";

// ======================

const ButtonBar = () => {

    const responseData = useSelector(selectResponses)

    const navigation = useNavigation()
    const back = () => {
        navigation.dispatch(StackActions.pop(1));
    }

    useEffect(() => {
        console.log(responseData);
    }, [responseData])



    return (
        <View style={button.buttonRow}>
            <TouchableOpacity style={[button.button, button.back]} onPress={() => back()}>
                <Ionicons name="chevron-back" size={24} color="white"/>
                <Text style={button.btnTxt}>Back</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ButtonBar