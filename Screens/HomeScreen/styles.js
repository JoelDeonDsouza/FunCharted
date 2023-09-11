import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  homeConatiner: {
    flex: 1,
    backgroundColor: "#9288F8",
  },
  headerConatiner: {
    flexDirection: "row",
    marginTop: height / 16,
    marginBottom: 10,
    alignItems: "center",
    paddingHorizontal: 15,
  },
  welcomeTextContainer: {
    flex: 1,
  },
  welcomeText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#000000",
  },
  addIconContainer:{
    width: 40,
    height: 40,
    backgroundColor:"#F56A79",
    borderRadius: width / 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  searchedMostConatiner: {
    marginTop: height / 80,
  },
  headingText: {
    fontSize: 20,
    fontWeight: "800",
    color: "#374259",
    marginHorizontal: width / 30,
  },
  btnMostSearched: {
    paddingHorizontal: width / 35,
    borderRadius: width / 1,
    marginBottom: height / 120,
  },
  imgContainer:{
    width: 60,
    height: 60,
    backgroundColor:"#EEEEEE",
    borderRadius: width / 1,
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    marginBottom: height / 180,
  },
  imgIcon: {
    width: 40,
    height: 40,
    marginBottom: height / 190,
    alignSelf: "center",
  },
  dataTextSearched: {
    fontSize: 15,
    color: "#000000",
    fontWeight: "700",
    textAlign: "center",
  },
});
