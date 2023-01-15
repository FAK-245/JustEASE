import {
    View,
    Text,
    ScrollView,
    TextInput,
    TouchableOpacity,
    Image
} from "react-native";
import React, {useState, useEffect} from "react";
import {Ionicons} from "@expo/vector-icons";
import {MaterialIcons} from "@expo/vector-icons";
import {FontAwesome} from "@expo/vector-icons";
import * as Progress from "react-native-progress";
import {printToFileAsync} from 'expo-print';
import {shareAsync} from 'expo-sharing';
import todoReducer from "../../redux/todoReducer";
import {useSelector, useDispatch} from "react-redux";
import {addTodo} from "../../redux/action";

import styles from "../../styles/style_end";
import {RFPercentage, RFValue} from "react-native-responsive-fontsize";
import {SafeAreaView} from "react-native-safe-area-context";
import im from '../../../assets/icon.png'


const End_of_Prototype = ({navigation}) => {


    const todoList = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [userData, setUserData] = useState("");
    console.log("hello", typeof (todoList.image))


    return (
        <View style={{flex: 1, backgroundColor: "white", paddingBottom: "14.5%"}}>
            <ScrollView style={{flexGrow: 1}}>
                <View style={styles.View1}>

                    {/* <Text style={{fontSize:20, color: 'black'}}>{todoList.code}</Text> */}
                    <Text style={styles.signuptxt}>Download</Text>
                </View>
                <View style={styles.Line}/>
                <View style={styles.FlatView}>
                    <View style={{margin: "8%"}}>
                        <Text style={styles.document1}>This is the end of the prototype!</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={styles.back}
                    onPress={() => navigation.pop()}
                >
                    <View
                        style={{
                            flexDirection: "row",

                            margin: 5,
                        }}
                    >
                        <Ionicons
                            name="chevron-back"
                            size={24}
                            color="white"
                            style={{margin: 5}}
                        />
                        <Text
                            style={{
                                color: "white",
                                textAlign: "center",
                                margin: 7,
                                fontWeight: "500",
                            }}
                        >
                            Back
                        </Text>
                    </View>
                </TouchableOpacity>
            </ScrollView>
            <Progress.Bar progress={1} width={410} height={3}/>
        </View>
    );
};

export default End_of_Prototype;
