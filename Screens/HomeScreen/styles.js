import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

const WIDTH = width * 0.74;
const HEIGHT = WIDTH * 1.7;

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
  addIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: "#F56A79",
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
  imgContainer: {
    width: 60,
    height: 60,
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
  // Header Data container //
  title: {
    fontSize: 28,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: -1,
    color: "#374259",
  },
  location: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "700",
    textAlign: "center",
  },
  date: {
    fontSize: 14,
    color: "#000000",
    fontWeight: "700",
    textAlign: "center",
  },
  itemContainer: {
    height: 70,
    padding: 10 * 2,
  },
  itemContainerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  overflowContainer: {
    height: 70,
    overflow: "hidden",
  },
  // Flat Data container //
  flexSlider: {
    height: height / 1.4,
  },
  imgContainerPoster: {
    position: "absolute",
    left: -WIDTH / 2,
  },
  posterImg: {
    width: WIDTH,
    height: HEIGHT,
    borderRadius: width / 50,
  },
  // Empty Data container //
  emptyContainer: {
    marginTop: height / 7,
    flexDirection: "column",
  },
  imgEmpty:{
    width: width / 6,
    height: width / 6,
    alignSelf: "center",
  },
  emptyText:{
    fontSize: 18,
    color: "#000",
    fontWeight: "700",
    textAlign: "center",
    fontWeight: "bold",
    opacity: 0.5,
  },
  // Loader icon //
  loaderIcon:{
    marginTop: height / 2.4,
    alignSelf: "center",
  }
});
