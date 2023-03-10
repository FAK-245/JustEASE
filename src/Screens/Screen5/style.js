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

  signuptxt: {
    color: Theme.black,
    textAlign: "center",
    fontSize: RFValue(24, 580),

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
    margin: 15,
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
    marginTop: 30,
  },
  textinputconatiner2: {
    marginTop: 10,
  },
  uploadimage: {
    height: Theme.hp("16%"),
    width: Theme.wp("86%"),
    backgroundColor: Theme.image,
    alignSelf: "center",
    margin: 5,
    borderRadius: 10,
  },
  FlatView: {
    backgroundColor: "#778ef9",
    height: Theme.hp("40%"),
    width: Theme.wp("86%"),
    alignSelf: "center",
    borderRadius: 10,
    margin: 10,
    padding: 10,
  },
  document1: {
    color: Theme.white,
    fontSize: RFValue(12, 580),
    // padding: 20,
    fontWeight: "800",
  },
  document2: {
    color: Theme.white,
    fontSize: RFValue(11, 580),
    // padding: 20,
    fontWeight: "400",
  },
  download: {
    // backgroundColor: "#3243f7",
    margin: 5,
    height: Theme.hp("5%"),
    width: Theme.wp("40%"),
    backgroundColor: "#1c5bd9",
    borderRadius: 20,
    // marginLeft: "5%",
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
    flexDirection: "row",
    justifyContent: "center",
    marginTop: Theme.hp("5%"),
  },
});
export default styles;
