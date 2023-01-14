
const {PDFDocument} = require('pdf-lib');
const {readFile, writeFile} = require('fs/promises');
const data = require('./fields.json');

async function createPDF(output) {
    try {
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
}

createPDF("completedForm.pdf")