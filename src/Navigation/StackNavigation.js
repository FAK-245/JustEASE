import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Screen1 from "../Screens/Screen1/Screen1";
import Screen2 from "../Screens/Screen2/Screen2";
import Screen3 from "../Screens/Screen3/Screen3";
import Screen4 from "../Screens/Screen4/Screen4";
import Screen5 from "../Screens/Screen5/Screen5";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
              style={{ elevation: 40, backgroundColor: "white" }}
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
              <Text style={{ marginBottom: "15%", fontWeight: "600" }}>
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
        name="Screen2"
        component={Screen2}
        options={{
          tabBarLabel: () => {
            return null;
          },
          tabBarIcon: () => (
            <Entypo
              name="dots-three-horizontal"
              size={30}
              color="black"
              style={{ backgroundColor: "white" }}
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
              style={{ elevation: 40, backgroundColor: "white" }}
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
              <Text style={{ marginBottom: "15%", fontWeight: "600" }}>
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
              style={{ backgroundColor: "white" }}
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
              style={{ elevation: 40, backgroundColor: "white" }}
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
              <Text style={{ marginBottom: "15%", fontWeight: "600" }}>
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
                style={{ backgroundColor: "white", marginBottom: 15 }}
              />
            </>
          ),
          tabBarIcon: () => {
            <FontAwesome
              name="home"
              size={30}
              color="black"
              style={{ elevation: 40, backgroundColor: "white" }}
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
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screen1" component={HomeTabs} />
        {/* <Stack.Screen name="Screen2" component={Screen2} /> */}
        <Stack.Screen name="Screen3" component={HomeTabs2} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Screen5" component={HomeTabs3} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({});
