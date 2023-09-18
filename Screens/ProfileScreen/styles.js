import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  userContainer: {
    flex: 1,
    backgroundColor: "#9288F8",
  },
  headerContainer: {
    marginTop: height / 14,
    paddingHorizontal: 5,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#000000",
  },
  userDeatilsContainer: {
    marginTop: height / 40,
    paddingHorizontal: 15,
    borderWidth: 0.6,
    borderBottomRightRadius: width / 26,
    borderBottomLeftRadius: width / 26,
    borderTopRightRadius: width / 26,
    borderTopLeftRadius: width / 26,
  },
  blockUserName: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
  },
  icon: {
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    boderRadius: width / 12,
  },
  headingTextHolder: {
    flex: 1,
    marginLeft: 15,
  },
  headingPlaceHolder: {
    fontSize: 16,
    fontWeight: "700",
    color: "#374259",
    opacity: 0.9,
  },
  userDetailsText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#000",
    opacity: 0.8,
  },
  lineDivider: {
    borderBottomColor: "#000",
    opacity: 0.1,
    borderBottomWidth: 1.5,
    marginLeft: width / 40,
    marginRight: width / 40,
  },
});
