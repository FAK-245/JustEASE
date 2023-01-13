import { StyleSheet } from "react-native";
import Theme from "../../utils/Theme";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  textinputconatiner: {
   
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:'center',
    justifyContent: 'space-between',
    alignSelf: 'center'
   
  },
  View1: {
    // height: Theme.hp("10%"),
    justifyContent: "center",
    marginTop: "10%",
  },
  signuptxt: {
    color: Theme.black,
    textAlign: "center",
    fontSize: RFValue(25, 580),
    fontWeight: "700",
  },
  signuptxt1: {
    color: Theme.black,
    textAlign: "center",
    fontSize: RFValue(25, 580),

    fontWeight: "700",
    margin: 10,
  },

  txtinput: {
    marginTop: 5,
    color: "#87CEEB",
    // flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#87CEEB",
    borderRadius: 1,
    fontSize: 14,
    paddingLeft: 15,
    //borderRadius: 5,
    paddingHorizontal: 10,
    height: Theme.hp("7%"),
    width: Theme.wp("80%"),
    alignSelf: "center",
  },
  txtinputAddress: {
    marginTop: 5,
    marginLeft: "5%",
    borderWidth: 1,
    color: "#87CEEB",
    borderColor: "#87CEEB",
    borderRadius: 1,
    fontSize: 14,
    //borderRadius: 5,
    paddingHorizontal: 10,
    height: Theme.hp("7%"),
    width: Theme.wp("65%"),
  },
  txtinputHouse: {
    marginTop: 5,
    marginLeft: 5,
    borderWidth: 1,
    color: "#87CEEB",
    borderColor: "#87CEEB",
    borderRadius: 1,
    fontSize: 14,
    //borderRadius: 5,
    paddingHorizontal: 10,
    height: Theme.hp("7%"),
    width: Theme.wp("22%"),
  },
  txtinputCity: {
    marginTop: 5,
    marginLeft: "5%",
    borderWidth: 1,
    color: "#87CEEB",
    borderColor: "#87CEEB",
    borderRadius: 1,
    fontSize: 14,
    //borderRadius: 5,
    paddingHorizontal: 10,
    height: Theme.hp("7%"),
    width: Theme.wp("60%"),
  },
  txtinputPostalCode: {
    marginTop: 5,
    marginLeft: "1%",
    borderWidth: 1,
    borderColor: "#87CEEB",
    borderRadius: 1,
    color: "#87CEEB",
    fontSize: 14,
    //borderRadius: 5,
    paddingHorizontal: 10,
    height: Theme.hp("7%"),
    width: Theme.wp("27%"),
  },
  yes: {
    margin: 5,
    height: Theme.hp("4%"),
    width: Theme.wp("40%"),
    backgroundColor: "#1c5bd9",
    //borderRadius: 5,
    marginLeft: "5%",
    opacity: 0.8,
  },
  no: {
    margin: 5,
    height: Theme.hp("4%"),
    width: Theme.wp("40%"),
    backgroundColor: "#1c5bd9",
    //borderRadius: 5,
    marginRight: "5%",
    opacity: 0.8,
  },
  back: {
    margin: 10,
    height: Theme.hp("6%"),
    width: Theme.wp("25%"),
    backgroundColor: "#1c5bd9",
    //borderRadius: 5,
    marginLeft: "5%",
    opacity: 0.8,
  },
  next: {
    margin: 10,
    height: Theme.hp("6%"),
    width: Theme.wp("25%"),
    backgroundColor: "#1c5bd9",
    //borderRadius: 5,
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
