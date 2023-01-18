import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {FontAwesome} from "@expo/vector-icons";
import {Entypo} from "@expo/vector-icons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import Landing from '../AppScreens/Landing/Landing';
import Language from '../AppScreens/Landing/Language';
import LanguagePicker from '../AppScreens/Landing/LanguagePicker';
import Overview from "../AppScreens/Overview/Overview";

import Part_A_Applicant_Info from "../AppScreens/Part_A/Part_A_Applicant_Info";
import Part_A_Dec_Legal_Rep from "../AppScreens/Part_A/Part_A_Dec_Legal_Rep";
import Part_A_Legal_Rep_Info from "../AppScreens/Part_A/Part_A_Legal_Rep_Info";
import Part_B_Dec_Answer_Insurance from "../AppScreens/Part_B/Part_B_Dec_Answer_Insurance";
import Part_B_Dec_Answer_Other_Protection from "../AppScreens/Part_B/Part_B_Dec_Answer_Other_Protection";
import Part_B_Dec_Contacted_Insurance from "../AppScreens/Part_B/Part_B_Dec_Contacted_Insurance";
import Part_B_Dec_Applied_Other_Protection from "../AppScreens/Part_B/Part_B_Dec_Applied_Other_Protection";
import Part_B_Dec_Insurance from "../AppScreens/Part_B/Part_B_Dec_Insurance_Coverage";
import Part_B_End_Insurance_Covers_Cost from "../AppScreens/Part_B/Part_B_End_Insurance_Covers_Cost";
import Part_B_End_Insurance_Not_Contacted from "../AppScreens/Part_B/Part_B_End_Insurance_Not_Contacted";
import Part_B_End_Other_Covers_Cost from "../AppScreens/Part_B/Part_B_End_Other_Covers_Cost";
import Part_B_In_Insurance_Cost_Coverage from "../AppScreens/Part_B/Part_B_In_Insurance_Cost_Coverage";
import Part_B_In_Name_Other_Protection from "../AppScreens/Part_B/Part_B_In_Name_Other_Protection";
import Part_B_In_Other_Cost_Coverage from "../AppScreens/Part_B/Part_B_In_Other_Cost_Coverage";
import Part_B_Up_Insurance from "../AppScreens/Part_B/Part_B_Up_Insurance";
import Part_B_Up_Insurance_Conf_Letter from "../AppScreens/Part_B/Part_B_Up_Insurance_Conf_Letter";
import Part_B_Up_Insurance_Rej_Letter from "../AppScreens/Part_B/Part_B_Up_Insurance_Rej_Letter";
import Part_B_Up_Other_Conf_Letter from "../AppScreens/Part_B/Part_B_Up_Other_Conf_Letter";
import Part_B_Up_Other_Rej_Letter from "../AppScreens/Part_B/Part_B_Up_Other_Rej_Letter";
import Part_C_Dec_Maintenance_Claims from "../AppScreens/Part_C/Part_C_Dec_Maintenance_Claims";
import Part_C_In_Up_Provider from "../AppScreens/Part_C/Part_C_In_Up_Provider";
import Part_D_Dec_Add_Person from "../AppScreens/Part_D/Part_D_Dec_Add_Person";
import Part_D_Dec_Maintenance_Obligations from "../AppScreens/Part_D/Part_D_Dec_Maintenance_Obligations";
import Part_D_Dec_Receiver_Income from "../AppScreens/Part_D/Part_D_Dec_Receiver_Income";
import Part_D_In_Info_Receiver_Cash from "../AppScreens/Part_D/Part_D_In_Info_Receiver_Cash";
import Part_D_In_Info_Receiver_Other from "../AppScreens/Part_D/Part_D_In_Info_Receiver_Other";
import Part_D_In_Up_Receiver_Income from "../AppScreens/Part_D/Part_D_In_Up_Receiver_Income";
import Part_SA_Dec_Receive_SA from "../AppScreens/Part_Social_Assistance/Part_SA_Dec_Receive_SA";
import Part_SA_End_Receives_SA from "../AppScreens/Part_Social_Assistance/Part_SA_End_Receives_SA";
import Part_SA_Up_Proof from "../AppScreens/Part_Social_Assistance/Part_SA_Up_Proof";
import End_Screen from "../AppScreens/End/End_Screen";

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (


        <NavigationContainer>

            <Stack.Navigator initialRouteName={'Landing'} screenOptions={{headerShown: false}}>

                {/* Landing */}
                <Stack.Screen name="Landing" component={Landing} />
                <Stack.Screen name="Language" component={Language} options={{animationEnabled: true, gestureEnabled: true}}/>
                <Stack.Screen name="LanguagePicker" component={LanguagePicker} options={{
                    presentation: 'transparentModal',
                    headerMode: 'none',
                    cardStyle:{
                        backgroundColor:"transparent",
                        opacity:0.9
                    },
                    animationEnabled: true
                }}/>

                {/* Overview */}
                <Stack.Screen name="Overview" component={Overview} options={{animationEnabled: true, gestureEnabled: true}}/>

                {/* PART A Screens */}
                <Stack.Screen name="Part_A_Applicant_Info" component={Part_A_Applicant_Info}/>
                <Stack.Screen name="Part_A_Dec_Legal_Rep" component={Part_A_Dec_Legal_Rep}/>
                <Stack.Screen name="Part_A_Legal_Rep_Info" component={Part_A_Legal_Rep_Info}/>

                {/* PART B Screens */}
                <Stack.Screen name="Part_B_Dec_Answer_Insurance" component={Part_B_Dec_Answer_Insurance}/>
                <Stack.Screen name="Part_B_Dec_Answer_Other_Protection" component={Part_B_Dec_Answer_Other_Protection}/>
                <Stack.Screen name="Part_B_Dec_Contacted_Insurance" component={Part_B_Dec_Contacted_Insurance}/>
                <Stack.Screen name="Part_B_Dec_Applied_Other_Protection" component={Part_B_Dec_Applied_Other_Protection}/>
                <Stack.Screen name="Part_B_Dec_Insurance" component={Part_B_Dec_Insurance}/>
                <Stack.Screen name="Part_B_End_Insurance_Covers_Cost" component={Part_B_End_Insurance_Covers_Cost}/>
                <Stack.Screen name="Part_B_End_Insurance_Not_Contacted" component={Part_B_End_Insurance_Not_Contacted}/>
                <Stack.Screen name="Part_B_End_Other_Covers_Cost" component={Part_B_End_Other_Covers_Cost}/>
                <Stack.Screen name="Part_B_In_Insurance_Cost_Coverage" component={Part_B_In_Insurance_Cost_Coverage}/>
                <Stack.Screen name="Part_B_In_Name_Other_Protection" component={Part_B_In_Name_Other_Protection}/>
                <Stack.Screen name="Part_B_In_Other_Cost_Coverage" component={Part_B_In_Other_Cost_Coverage}/>
                <Stack.Screen name="Part_B_Up_Insurance" component={Part_B_Up_Insurance}/>
                <Stack.Screen name="Part_B_Up_Insurance_Conf_Letter" component={Part_B_Up_Insurance_Conf_Letter}/>
                <Stack.Screen name="Part_B_Up_Insurance_Rej_Letter" component={Part_B_Up_Insurance_Rej_Letter}/>
                <Stack.Screen name="Part_B_Up_Other_Conf_Letter" component={Part_B_Up_Other_Conf_Letter}/>
                <Stack.Screen name="Part_B_Up_Other_Rej_Letter" component={Part_B_Up_Other_Rej_Letter}/>

                {/* PART C Screens */}
                <Stack.Screen name="Part_C_Dec_Maintenance_Claims" component={Part_C_Dec_Maintenance_Claims}/>
                <Stack.Screen name="Part_C_In_Up_Provider" component={Part_C_In_Up_Provider}/>

                {/* PART D Screens */}
                <Stack.Screen name="Part_D_Dec_Add_Person" component={Part_D_Dec_Add_Person}/>
                <Stack.Screen name="Part_D_Dec_Maintenance_Obligations" component={Part_D_Dec_Maintenance_Obligations}/>
                <Stack.Screen name="Part_D_Dec_Receiver_Income" component={Part_D_Dec_Receiver_Income}/>
                <Stack.Screen name="Part_D_In_Info_Receiver_Cash" component={Part_D_In_Info_Receiver_Cash}/>
                <Stack.Screen name="Part_D_In_Info_Receiver_Other" component={Part_D_In_Info_Receiver_Other}/>
                <Stack.Screen name="Part_D_In_Up_Receiver_Income" component={Part_D_In_Up_Receiver_Income}/>

                {/* PART SA Screens */}
                <Stack.Screen name="Part_SA_Dec_Receive_SA" component={Part_SA_Dec_Receive_SA}/>
                <Stack.Screen name="Part_SA_End_Receives_SA" component={Part_SA_End_Receives_SA}/>
                <Stack.Screen name="Part_SA_Up_Proof" component={Part_SA_Up_Proof}/>

                {/* End of Prototype Screens */}
                <Stack.Screen name="End_Screen" component={End_Screen}/>


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;
