import React from "react";
import { View, Text } from "react-native";
import { styles } from "../styles";
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Profile</Text>
    </View>
  );
};

export default Header;
