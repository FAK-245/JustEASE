import React, {useEffect, useState} from 'react'
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native'
import {useSafeAreaInsets} from "react-native-safe-area-context";

//Navigation
import {StackActions, useNavigation} from "@react-navigation/native";

//Redux
import {useSelector} from "react-redux";
import {selectLanguage} from "../../redux/slice/settingSlice";

//Components
import Header from "../../Components/shared/Header"
import ButtonBar from "../../Components/shared/ButtonBar";

//Styles
import { global } from '../../styles/shared/global';
import { overview } from '../../styles/overview/overview';

// ======================

const Overview = ({ }) => {

    //Safe are view
    const insets = useSafeAreaInsets();

    //Local state
    const [sections, setSections] = useState([
        {path: "Part_A_Applicant_Info", desc: "Part A - Personal Information", img: "User"},
        {path: "Part_B_Dec_Answer_Insurance", desc: "Part B - Legal protection insurance", img: "Excl"},
        {path: "Part_C_Dec_Maintenance_Claims", desc: "Part C - Legal protection insurance", img: "Get"},
        {path: "Part_D_Dec_Add_Person", desc: "Part D - Relatives (maintenance)", img: "Family"},
        {path: "X", desc: "Part E - Gross Income", img: "Money"},
        {path: "X", desc: "Part F - Deductions", img: "Exposure"},
        {path: "X", desc: "Part G - Assets", img: "Diamond"},
        {path: "X", desc: "Part H - Housing Costs", img: "Home"},
        {path: "X", desc: "Part I - Other Payment Obligations", img: "Bank"},
        {path: "X", desc: "Part J - Special Burdens", img: "Unavailable"}
    ])

    //Redux
    const languageData = useSelector(selectLanguage);

    //Redirect
    const navigation = useNavigation()
    const redirect = (path) => {
        navigation.dispatch(StackActions.push(path));
    }

    return (
        <View style={[global.parentContainer, {paddingTop: insets.top}]}>
            <Header txt={"Overview"}/>
            <ScrollView style={overview.scrollView} bounces={false}>
                {
                    sections.map((elem, index) => {
                        return <TouchableOpacity activeOpacity={1} onPress={() => redirect(elem.path)} style={overview.listElem}>
                            {/*<Image
                                style={overview.img}
                                source={require(`../../../assets/overview/${elem.img}.png`)}
                            />*/}
                            <Text>{elem.desc}</Text>
                            {/*todo: Status*/}
                        </TouchableOpacity>
                    })
                }
            </ScrollView>
            {/*todo: component to go back and forth*/}
        </View>
    )
}

export default Overview