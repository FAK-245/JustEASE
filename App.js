import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StackNavigation from "./src/Navigation/StackNavigation";
import Screen3 from "./src/Screens/Screen3/Screen3";
import Part_A_Applicant_Info from "./src/AppScreens/Part_A/Part_A_Applicant_Info"

import { PersistGate } from 'redux-persist/integration/react'
import {store, persistor} from './src/redux/store';

import { Provider } from 'react-redux';


export default function App() {
  return (
  
    <Provider store={store}>
    <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
      <StackNavigation/>
    </PersistGate>
    </Provider>
 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    
  },
});
