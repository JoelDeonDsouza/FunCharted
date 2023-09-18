import React from "react";
import { View, ScrollView } from "react-native";
import UserDetails from "./Components/UserDetails";
// Styles //
import { styles } from "./styles";

const ProfileScreen = () => {
  return (
    <View style={styles.userContainer}>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 15,
          paddingBottom: 150,
        }}
      >
        <UserDetails />
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
