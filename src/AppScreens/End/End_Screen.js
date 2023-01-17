import {
    View,
    Text, TouchableOpacity,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectResponses} from "../../redux/slice/formSlice";
import styles from "../../styles/style_end";
import {global} from "../../styles/shared/global";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Header from "../../Components/shared/Header";

const {PDFDocument} = require('pdf-lib');
//const {readFile, writeFile} = require('fs/promises');
//const data = require('./fields.json');


const End_Screen = ({ navigation }) => {

    //Safe are view
    const insets = useSafeAreaInsets();

    const answerData = useSelector(selectResponses);
    console.log(answerData);

    const createPDF = async (output) => {
        console.log(answerData);
        return alert("moin");
        try {
            /*
            const pdf = await PDFDocument.load(await readFile("../assets/PKH.pdf"));

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

            await writeFile(output, pdfBytes);
            console.log("PDF creation successful");

             */
            console.log("hallo")
        } catch (err) {
            console.log(err);
        }
    }

  return (
      <View style={[global.parentContainer, {paddingTop: insets.top, paddingBottom: insets.bottom}]}>
          <Header txt={"Download"}/>

          <Text style={styles.document1}>Your application is complete.</Text>
          <TouchableOpacity onPress={() => createPDF('completedForm.pdf')}>
              <Text style={styles.document2}>Click on the download button below to generate your application.</Text>
          </TouchableOpacity>

          <Text style={styles.document1}>Important</Text>
          <Text style={styles.document2}>
              After You have download your application you have to signit under
              point K on page 4. Afterwards you need to send it to your lawyer
              or directly to the court at which your case is being processed.
          </Text>
    </View>
  );
};

export default End_Screen;
