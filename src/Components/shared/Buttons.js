import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'

//Navigation
import {useNavigation, StackActions} from "@react-navigation/native";

//Styles
import { button } from '../../styles/shared/button';

// ======================

const Button = ({ txt, route }) => {

    //Navigation
    const navigation = useNavigation()

    /**
     * @function (01) Use the page name to redirect
     */
    const redirect = () => {
        navigation.dispatch(StackActions.push(route));
    }

    return (
        <TouchableOpacity activeOpacity={1} style={button.container} onPress={() => redirect()}>
            <Text style={button.containerTxt}>{txt}</Text>
        </TouchableOpacity>
    )
}

export default Button