import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'

//Styles
import { global } from '../../styles/shared/global';

const Header = ({txt}) => {

    return (
        <View style={global.headerContainer}>
            <Text style={global.headerTxt}>{txt}</Text>
            <View style={global.headerBorder}></View>
        </View>
    )
}

export default Header