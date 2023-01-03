import { View, Text, StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Theme from "../../utils/Theme";

const styles = StyleSheet.create({
  View1: {
    // height: Theme.hp("10%"),
    justifyContent: "center",
    marginTop: "2%",
  },
  Text1: {
    color: Theme.black,
    textAlign: "center",
    fontSize: RFValue(25, 580),

    fontWeight: "700",
  },
  Text2: {
    color: Theme.black,
    textAlign: "center",
    fontSize: RFValue(25, 580),

    fontWeight: "700",
    margin: 10,
  },
  View2: {
    // height: Theme.hp("20%"),
  },
  View3: {
    // height: Theme.hp("50%"),
    paddingTop: "10%",
  },
  yes: {
    margin: 10,

    height: Theme.hp("15%"),
    width: Theme.wp("80%"),
    backgroundColor: "#1c5bd9",
    borderRadius: 5,
    alignSelf: "center",
    // marginLeft: "5%",
    opacity: 0.8,
  },
  no: {
    margin: 10,
    height: Theme.hp("15%"),
    width: Theme.wp("80%"),
    backgroundColor: "#1c5bd9",
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
  },
  next: {
    margin: 10,
    height: Theme.hp("6%"),
    width: Theme.wp("25%"),
    backgroundColor: "#1c5bd9",
    borderRadius: 5,
    marginRight: "5%",
    opacity: 0.8,
  },
  Line: {
    backgroundColor: Theme.Different,
    opacity: 0.6,
    height: Theme.hp("0.8%"),
    width: Theme.wp("15%"),
    alignSelf: "center",
    margin: 15,
  },
});
export default styles;
