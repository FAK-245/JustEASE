import {useState} from "react";
import {Buffer} from 'buffer';

//Redux
import {useSelector} from "react-redux";
import {getAnsweredQuestions} from "../../redux/reducer/FormControlSlice";

//PDF generation
import {PDFDocument} from 'pdf-lib'

function DoneView() {

    //Local state
    const [pdfByteArr, setPdfByteArr] = useState < any > ()

    //Redux state
    const answers = useSelector(getAnsweredQuestions);

    //getAnsweredQuestions
    /**
     * @function (01) todo: validate that all answers are populated
     *           (02) Map the answers data to the pdf generator
     *           (03) Open the pdf in a new view / downlaod it
     */
    async function createPDF(output) {
        try {
            const pdf = await PDFDocument.load(await readFile("../assets/PKH.pdf"));


            const form = pdf.getForm()

            const fields = form.getFields()
            let index = 0;
            fields.forEach(field => {
                const type = field.constructor.name
                const name = field.getName()

                if (type === 'PDFTextField') {
                    let fieldTemp = form.getTextField(name);

                    if (name !== "" && name) fieldTemp.setText(index.toString());
                    index++;
                    console.log(`${type}: ${name}`)
                }
            })

            /*const fieldNames = pdf
                .getForm()
                .getFields()
                .map((f) => f.getName());

            console.log({fieldNames})*/


            const pdfBytes = await pdf.save();

            await writeFile(output, pdfBytes);
            console.log("PDF creation successful");
        } catch (err) {
            console.log(err);
        }

        //const pdfBytes = await pdfDoc.save()

        var b64 = Buffer.from(pdfBytes).toString('base64');


        setPdfByteArr(b64);


    }

    return (
        <div>
            <div onClick={() => downloadForm()}>Download now</div>
            <embed src={"data:application/pdf;base64," + pdfByteArr} type="application/pdf" width="100%"
                   height="600px"/>
        </div>
    )
}

export default DoneView