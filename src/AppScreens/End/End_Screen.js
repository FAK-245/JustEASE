import {
    View,
    Text, TouchableOpacity,
} from "react-native";
import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {selectResponses} from "../../redux/slice/formSlice";
import styles from "../../styles/style_end";
import {global} from "../../styles/shared/global";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Header from "../../Components/shared/Header";
import BackButtonBar from "../../Components/shared/BackButtonBar";

const {PDFDocument} = require('pdf-lib');
//const {readFile, writeFile} = require('fs/promises');
const data = require('./fields.json');


const End_Screen = ({navigation}) => {

    //Safe are view
    const insets = useSafeAreaInsets();

    const answerData = useSelector(selectResponses);

    const createPDF = async (output) => {
        console.log(answerData);
        try {
            //const pdf = await PDFDocument.load(await readFile("../assets/PKH.pdf"));
            const formUrl = 'https://tm-ds.s3.eu-central-1.amazonaws.com/tc/zp1a.pdf'
            const formPdfBytes = await fetch(formUrl).then(res => res.arrayBuffer())
            const pdf = await PDFDocument.load(formPdfBytes)

            const form = pdf.getForm()

            const fields = form.getFields()
            let index = 0;
            fields.forEach(field => {
                const type = field.constructor.name
                const name = field.getName()

                if (type === 'PDFCheckBox') {
                    let fieldTemp = form.getCheckBox(name);

                    if (data.hasOwnProperty(name)) {
                        fieldTemp.check();
                    }
                    index++;
                }

                if (type === 'PDFTextField') {
                    let fieldTemp = form.getTextField(name);

                    if (data.hasOwnProperty(name)) {
                        fieldTemp.setText(data[name]);
                    }
                    index++;
                }
            })

            const pdfBytes = await pdf.save();

            //await writeFile(output, pdfBytes);
            console.log("PDF creation successful");

        } catch (err) {
            console.log(err);
        }
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
                <TouchableOpacity onPress={() => createPDF('completedForm.pdf')}>
                    <Text style={{fontSize: 34, marginTop: "15%", textDecorationLine: "underline"}}>Download</Text>
                </TouchableOpacity>

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
