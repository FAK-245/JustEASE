import { View, Text, StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Theme from "../../utils/Theme";
const styles = StyleSheet.create({
  View1: {
    height: Theme.hp("10%"),
    justifyContent: "center",
    marginTop: "15%",
  },
  Text1: {
    color: Theme.black,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "700",
  },
  Text2: {
    color: Theme.black,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "700",
    margin: 10,
  },
  View2: {
    height: Theme.hp("20%"),
  },
  View3: {
    height: Theme.hp("50%"),
  },
  yes: {
    margin: 10,

    height: Theme.hp("15%"),
    width: Theme.wp("80%"),
    backgroundColor: "blue",
    borderRadius: 5,
    alignSelf: "center",
    // marginLeft: "5%",
    opacity: 0.8,
  },
  no: {
    margin: 10,
    height: Theme.hp("15%"),
    width: Theme.wp("80%"),
    backgroundColor: "blue",
    borderRadius: 5,
    alignSelf: "center",
    // marginRight: "5%",
    opacity: 0.8,
  },
  back: {
    margin: 10,
    height: Theme.hp("6%"),
    width: Theme.wp("25%"),
    backgroundColor: "#1c5bd9",
    borderRadius: 5,
    marginLeft: "5%",
    opacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  next: {
    margin: 10,
    height: Theme.hp("6%"),
    width: Theme.wp("25%"),
    backgroundColor: "#1c5bd9",
    borderRadius: 5,
    marginRight: "5%",
    opacity: 0.8,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  View1: {
    height: Theme.hp("10%"),
    justifyContent: "center",
    marginTop: "15%",
  },
  signuptxt: {
    color: Theme.black,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "700",
  },
  signuptxt1: {
    color: Theme.black,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "700",
    margin: 10,
  },
  Line: {
    backgroundColor: Theme.Different,
    opacity: 0.6,
    height: Theme.hp("0.8%"),
    width: Theme.wp("15%"),
    alignSelf: "center",
    margin: 15
  },
  txtinput: {
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#87CEEB",
    borderRadius: 1,
    // fontFamily: "regular",
    fontSize: 14,
    paddingLeft: 15,
    borderRadius: 5,
    paddingHorizontal: 10,
    // backgroundColor: "",
    height: Theme.hp("7%"),
    width: Theme.wp("86%"),
    alignSelf: "center",
  },
  textinputconatiner: {
   
    marginTop: 30
  },
  textinputconatiner2: {
    marginTop: 30
  },
  uploadimage: {

    height: Theme.hp("16%"),
    width: Theme.wp("86%"),
    backgroundColor:  Theme.image,
    alignSelf: 'center',
    margin: 5,
    borderRadius: 10

  }
});
export default styles;