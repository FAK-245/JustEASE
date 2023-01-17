import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import {StackActions, useNavigation} from "@react-navigation/native";

//Redux
import {useDispatch} from "react-redux";
import {modifyLanguage} from "../../redux/slice/settingSlice";

//Styles
import { global } from '../../styles/shared/global';
import { language } from '../../styles/landing/language';

// ======================

const LanguagePicker = ({ }) => {

    //Navigation
    const navigation = useNavigation();

    //Local state
    const [languagesData, setLanguagesData] = useState([
        {id: "DE", desc: "German"},
        {id: "EN", desc: "English"}
    ])

    //Navigation
    const closeView = () => {
        navigation.dispatch(StackActions.pop(1));
    }

    //Redux
    const dispatch = useDispatch();
    const changeLanguage = (data) => {
        dispatch(modifyLanguage(data))
        closeView();
    }

    return (
        <View style={global.modalContainer}>
            <View style={global.modalInnerContainer}>
                <TouchableOpacity style={global.modalInnerClose} onPress={() => closeView()}>
                    <Text style={global.modalInnerTxt}>Close</Text>
                </TouchableOpacity>
                {
                    languagesData.map((elem) => {
                        return <TouchableOpacity style={language.selectWrapper} onPress={() => changeLanguage(elem)}>
                            <Text style={language.selectDesc}>{elem.desc}</Text>
                        </TouchableOpacity>
                    })
                }
                <Text style={language.extraDesc}>More to come</Text>
            </View>
        </View>
    )
}

export default LanguagePicker