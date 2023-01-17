import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import {useSafeAreaInsets} from "react-native-safe-area-context";

//Components
import Button from "../../Components/shared/Buttons";

//Styles
import { global } from '../../styles/shared/global';
import { landing } from '../../styles/landing/landing';

// ======================

const Landing = () => {

    //Safe are view
    const insets = useSafeAreaInsets();

    return (
        <View style={[global.parentContainer, {paddingTop: insets.top}]}>
            <Image
                style={landing.headerImg}
                source={require('../../../assets/general/people.png')}
            />
            <Text style={landing.headerTxt}>We guide you through the application for Legal Aid in Germany</Text>
            <Button txt={'Start the Tour'} route={'Language'} />

        </View>
    )
}

export default Landing