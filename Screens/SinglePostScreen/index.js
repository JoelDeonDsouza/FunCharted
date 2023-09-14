import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
// Styles //
import { styles } from "./styles";
// Icons //
import { AntDesign } from "@expo/vector-icons";

const SinglePostScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={styles.singlePostContainer}>
      <Image
        source={{ uri: item.picturePath }}
        style={[StyleSheet.absoluteFillObject]}
      />
      <View style={[StyleSheet.absoluteFillObject, styles.fadeImage]} />
      <View style={styles.closeBackground}>
        <AntDesign
          name="close"
          size={28}
          color={"#F56A79"}
          onPress={() => {
            navigation.goBack();
          }}
        />
      </View>
      {/* Details */}
      <View style={[StyleSheet.absoluteFillObject, styles.detailsContainer]}>
        <Text style={styles.title}>{item.name}</Text>
        <Text>{item.maplocation}</Text>
      </View>
    </View>
  );
};

export default SinglePostScreen;
