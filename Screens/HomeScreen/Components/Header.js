import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "../styles";
// Icons //
import Icon from "react-native-vector-icons/MaterialIcons";

const Header = () => {
  return (
    <View style={styles.headerConatiner}>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Hello,</Text>
        <Text numberOfLines={1} style={styles.welcomeText}>
          Dambi Dsouza
        </Text>
      </View>
      <TouchableOpacity style={styles.addIconContainer}>
        <Icon name="add" size={30} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
