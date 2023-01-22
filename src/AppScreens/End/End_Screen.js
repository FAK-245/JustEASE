import {
    View,
    Text,
    TouchableOpacity, Button
} from "react-native";
import * as Linking from 'expo-linking';
import { WebView } from 'react-native-webview';
import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {formSubmitAsync, selectImg, selectResponses} from "../../redux/slice/formSlice";
import styles from "../../styles/style_end";
import {global} from "../../styles/shared/global";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Header from "../../Components/shared/Header";
import BackButtonBar from "../../Components/shared/BackButtonBar";



const End_Screen = ({navigation}) => {

    //Safe are view
    const insets = useSafeAreaInsets();

    //Local state
    const [loading, setLoading] = useState(false)
    const [imgId, setImgId] = useState("");

    const dispatch = useDispatch();
    const answerData = useSelector(selectResponses);
    const imgData = useSelector(selectImg);

    const createPDF = async () => {
        setLoading(true)
        dispatch(formSubmitAsync({answers: answerData, img: imgData}))
            .then(res => {
                setImgId(res.payload.img);
                setLoading(false)
            })
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>

            <Header txt={"Download"}/>
            <View style={{
                backgroundColor: "white",
                flexGrow: 1,
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-start"
            }}>
                <Text style={{fontSize: 18, fontWeight: "bold", marginTop: "10%"}}>Your application is complete.</Text>
                {
                    (!loading && imgId === "") && (
                        <TouchableOpacity onPress={() => createPDF('completedForm.pdf')}>
                            <Text style={{fontSize: 34, marginTop: "15%", textDecorationLine: "underline"}}>Create Download</Text>
                        </TouchableOpacity>
                    )
                }
                {
                    (!loading && imgId !== "") && (
                        <TouchableOpacity onPress={() => Linking.openURL(imgId)}>
                            <Text style={{fontSize: 34, marginTop: "15%", textDecorationLine: "underline"}}>Download</Text>
                        </TouchableOpacity>
                    )
                }
                {
                    loading && <Text style={{fontSize: 34, marginTop: "15%", textDecorationLine: "underline"}}>Loading...</Text>
                }

                <Text style={{fontSize: 14, width: "85%", marginTop: "15%"}}>
                    After You have download your application you have to signit under
                    point K on page 4. Afterwards you need to send it to your lawyer
                    or directly to the court at which your case is being processed.
                </Text>
            </View>
            <BackButtonBar/>
        </View>
    );
};

export default End_Screen;
