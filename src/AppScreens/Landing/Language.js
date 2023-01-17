import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import {useSafeAreaInsets} from "react-native-safe-area-context";

//Navigation
import {StackActions, useNavigation} from "@react-navigation/native";

//Redux
import {useSelector} from "react-redux";
import {selectLanguage} from "../../redux/slice/settingSlice";

//Components
import Button from "../../Components/shared/Buttons";

//Styles
import { global } from '../../styles/shared/global';
import { language } from '../../styles/landing/language';

// ======================

const Language = ({ }) => {

    //Safe are view
    const insets = useSafeAreaInsets();

    //Redux
    const languageData = useSelector(selectLanguage);

    //Navigation
    const navigation = useNavigation()
    const openLanguagePicker = () => {
        navigation.dispatch(StackActions.push('LanguagePicker'));
    }

    return (
        <View style={[global.parentContainer, {paddingTop: insets.top}]}>

            <Text style={language.desc}>Before we start</Text>
            <Text style={language.smallDesc}>Please select the language you are most familiar with</Text>

            <Text style={language.pickDesc}>Language</Text>
            <TouchableOpacity style={language.pickWrapper} onPress={() => openLanguagePicker()}>
                <Text>{languageData.desc}</Text>
                <Image
                    style={language.dropDownIcon}
                    source={require('../../../assets/general/dropdown.png')}
                />
            </TouchableOpacity>

            <Button txt={'Continue'} route={'Overview'} />
        </View>
    )
}

export default Language