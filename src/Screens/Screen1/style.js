import { StyleSheet } from "react-native";
import Theme from "../../utils/Theme";
const styles = StyleSheet.create({
  mainView: {
    flex: 1,
  },
  View1: {
    height: Theme.hp("10%"),
    justifyContent: "center",
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
  txtinput: {
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#87CEEB",
    borderRadius: 1,
    fontFamily: "regular",
    fontSize: 14,
    paddingLeft: 15,
    borderRadius: 5,
    paddingHorizontal: 10,

    backgroundColor: "#FAFAFA",
    height: Theme.hp("6%"),
  },
  btn: {
    borderColor: "#0095F6",
    height: 42,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#87CEEB",

    marginTop: 20,
    height: 60,
  },
  btntxt: {
    alignSelf: "center",
    color: Theme.white,
    fontSize: 18,
    fontWeight: "bold",
    // marginTop: 15,
  },
});
export default styles;
