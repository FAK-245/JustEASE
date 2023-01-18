import {readFile, writeFile} from "react-native-fs";

const pdf = await PDFDocument.load(await readFile("../../../assets/PKH.pdf"));

print(pdf);