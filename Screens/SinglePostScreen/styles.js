import { StyleSheet, Dimensions } from "react-native";
const { height, width } = Dimensions.get("screen");

export const styles = StyleSheet.create({
  singlePostContainer: {
    flex: 1,
  },
  closeBackground: {
    backgroundColor: "#eee",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderRadius: width / 1,
    position: "absolute",
    top: height / 18,
    right: 10,
    zIndex: 2,
  },
  fadeImage: {
    backgroundColor: "#9288F8",
    opacity: 0.6,
  },
  // Details //
  detailsContainer: {
    backgroundColor: "#eee",
    padding: 10 * 2,
    borderRadius: width / 30,
  },
  title: {
    fontSize: 28,
    fontWeight: "900",
    textTransform: "uppercase",
    letterSpacing: -1,
    color: "#374259",
  },
});
