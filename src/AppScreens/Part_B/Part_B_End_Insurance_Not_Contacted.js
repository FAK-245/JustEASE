import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";
import React, { useState, useEffect } from "react";
import {global} from "../../styles/shared/global";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import {StackActions, useNavigation} from "@react-navigation/native";


const Screen5 = () => {

  //Safe are view
  const insets = useSafeAreaInsets();

  const navigation = useNavigation()
 
  return (
      <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom, width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center"}]}>
      <Text>Application unsuccessful</Text>
        <TouchableOpacity onPress={() => navigation.dispatch(StackActions.pop(1))}>
          <Text>Back</Text>
        </TouchableOpacity>
    </View>
  );
};

export default Screen5;
