import {StyleSheet, Text, View} from "react-native";
import React from "react";
import {AntDesign} from "@expo/vector-icons";
import {FontAwesome} from "@expo/vector-icons";
import {Entypo} from "@expo/vector-icons";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Part_A_Applicant_Info from "../AppScreens/Part_A/Part_A_Applicant_Info";
import Part_A_Dec_Legal_Rep from "../AppScreens/Part_A/Part_A_Dec_Legal_Rep";
import Part_A_Legal_Rep_Info from "../AppScreens/Part_A/Part_A_Legal_Rep_Info";
import Screen2 from "../Screens/Screen2/Screen2";
import Screen3 from "../Screens/Screen3/Screen3";
import Screen4 from "../Screens/Screen4/Screen4";
import Screen5 from "../Screens/Screen5/Screen5";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {PersistGate} from 'redux-persist/integration/react'
import {store, persistor} from '../redux/store';

import {Provider} from 'react-redux';


import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Screen1 from "../Screens/Screen1/Screen1";
import Part_B_Dec_Answer_Insurance from "../AppScreens/Part_B/Part_B_Dec_Answer_Insurance";
import Part_B_Dec_Answer_Other_Protection from "../AppScreens/Part_B/Part_B_Dec_Answer_Other_Protection";
import Part_B_Dec_Contacted_Insurance from "../AppScreens/Part_B/Part_B_Dec_Contacted_Insurance";
import Part_B_Dec_Applied_Other_Protection from "../AppScreens/Part_B/Part_B_Dec_Applied_Other_Protection";
import Part_B_Dec_Insurance from "../AppScreens/Part_B/Part_B_Dec_Insurance";
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


const Tab = createBottomTabNavigator();

function HomeTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    position: "absolute",

                    borderTopRightRadius: 12,
                    backgroundColor: "white",
                },
            }}
            null
            // screenOptions={{headerShown: false,

            // }}
            tabBarOptions={{
                activeTintColor: "#2F5FDB",
                inactiveTintColor: "lightgray",
            }}
        >
            <Tab.Screen
                name="Screen1"
                component={Screen1}
                options={{
                    tabBarLabel: () => {
                        return null;
                    },
                    tabBarIcon: () => (
                        <FontAwesome
                            name="home"
                            size={30}
                            color="black"
                            style={{elevation: 40, backgroundColor: "white"}}
                        />
                    ),
                }}
            />
            <Tab.Screen
                name="HomeTabs"
                component={HomeTabs}
                listeners={{
                    tabPress: (e) => {
                        // Prevent default action
                        e.preventDefault();
                    },
                }}
                options={{
                    tabBarLabel: () => (
                        <>
                            <Text style={{marginBottom: "15%", fontWeight: "600"}}>
                                My Applications
                            </Text>
                        </>
                    ),
                    tabBarIcon: () => {
                        return null;
                    },
                }}
            />

            <Tab.Screen
                name="Part_A_Dec_Legal_Rep"
                component={Part_A_Dec_Legal_Rep}
                options={{
                    tabBarLabel: () => {
                        return null;
                    },
                    tabBarIcon: () => (
                        <Entypo
                            name="dots-three-horizontal"
                            size={30}
                            color="black"
                            style={{backgroundColor: "white"}}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="Part_A_Legal_Rep_Info"
                component={Part_A_Legal_Rep_Info}
                options={{
                    tabBarLabel: () => {
                        return null;
                    },
                    tabBarIcon: () => (
                        <Entypo
                            name="dots-three-horizontal"
                            size={30}
                            color="black"
                            style={{backgroundColor: "white"}}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function HomeTabs2() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    position: "absolute",

                    borderTopRightRadius: 12,
                    backgroundColor: "white",
                },
            }}
            null
            // screenOptions={{headerShown: false,

            // }}
            tabBarOptions={{
                activeTintColor: "#2F5FDB",
                inactiveTintColor: "lightgray",
            }}
        >
            <Tab.Screen
                name="Screen3"
                component={Screen3}
                options={{
                    tabBarLabel: () => {
                        return null;
                    },
                    tabBarIcon: () => (
                        <FontAwesome
                            name="home"
                            size={30}
                            color="black"
                            style={{elevation: 40, backgroundColor: "white"}}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="HomeTabs2"
                component={HomeTabs2}
                listeners={{
                    tabPress: (e) => {
                        // Prevent default action
                        e.preventDefault();
                    },
                }}
                options={{
                    tabBarLabel: () => (
                        <>
                            <Text style={{marginBottom: "15%", fontWeight: "600"}}>
                                My Applications
                            </Text>
                        </>
                    ),
                    tabBarIcon: () => {
                        return null;
                    },
                }}
            />

            <Tab.Screen
                name="Screen4"
                component={Screen4}
                options={{
                    tabBarLabel: () => {
                        return null;
                    },
                    tabBarIcon: () => (
                        <Entypo
                            name="dots-three-horizontal"
                            size={30}
                            color="black"
                            style={{backgroundColor: "white"}}
                        />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

function HomeTabs3() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    position: "absolute",

                    borderTopRightRadius: 12,
                    backgroundColor: "white",
                },
            }}
            null
            // screenOptions={{headerShown: false,

            // }}
            tabBarOptions={{
                activeTintColor: "#2F5FDB",
                inactiveTintColor: "lightgray",
            }}
        >
            <Tab.Screen
                name="Screen5"
                component={Screen5}
                options={{
                    tabBarLabel: () => {
                        return null;
                    },
                    tabBarIcon: () => (
                        <FontAwesome
                            name="home"
                            size={30}
                            color="black"
                            style={{elevation: 40, backgroundColor: "white"}}
                        />
                    ),
                }}
            />

            <Tab.Screen
                name="HomeTabs2"
                component={HomeTabs2}
                listeners={{
                    tabPress: (e) => {
                        // Prevent default action
                        e.preventDefault();
                    },
                }}
                options={{
                    tabBarLabel: () => (
                        <>
                            <Text style={{marginBottom: "15%", fontWeight: "600"}}>
                                My Applications
                            </Text>
                        </>
                    ),
                    tabBarIcon: () => {
                        return null;
                    },
                }}
            />

            <Tab.Screen
                name="HomeTabs3"
                component={HomeTabs3}
                listeners={{
                    tabPress: (e) => {
                        // Prevent default action
                        e.preventDefault();
                    },
                }}
                options={{
                    tabBarLabel: () => (
                        <>
                            <Entypo
                                name="dots-three-horizontal"
                                size={30}
                                color="black"
                                style={{backgroundColor: "white", marginBottom: 15}}
                            />
                        </>
                    ),
                    tabBarIcon: () => {
                        <FontAwesome
                            name="home"
                            size={30}
                            color="black"
                            style={{elevation: 40, backgroundColor: "white"}}
                        />;
                    },
                }}
            />

            {/* <Tab.Screen
        name="Screen5"
        component={Screen5}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => (
            <Entypo
              name="dots-three-horizontal"
              size={30}
              color="black"
              style={{ backgroundColor: "#FFB6C1" }}
            />
          ),
        }}
      /> */}
        </Tab.Navigator>
    );
}

const Stack = createNativeStackNavigator();
const StackNavigation = () => {
    return (


        <NavigationContainer>


            <Stack.Navigator initialRouteName={'Part_A_Applicant_Info'}
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="Screen1" component={HomeTabs}/>
                <Stack.Screen name="Screen2" component={Screen2}/>


                <Stack.Screen name="Screen3" component={HomeTabs2}/>

                <Stack.Screen name="Screen4" component={Screen4}/>
                <Stack.Screen name="Screen5" component={HomeTabs3}/>

                {/* PART A Screens */}
                <Stack.Screen name="Part_A_Dec_Legal_Rep" component={Part_A_Dec_Legal_Rep}/>
                <Stack.Screen name="Part_A_Applicant_Info" component={Part_A_Applicant_Info}/>
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


            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;

const styles = StyleSheet.create({});
