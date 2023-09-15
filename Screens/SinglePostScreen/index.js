import React from "react";
import { View, Text, Image, StyleSheet, Dimensions } from "react-native";
// Styling component //
const { height } = Dimensions.get("screen");
// Styles //
import { styles } from "./styles";
// Icons //
import { AntDesign } from "@expo/vector-icons";
import { SharedElement } from "react-native-shared-element";

const SinglePostScreen = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={styles.singlePostContainer}>
      <SharedElement
        id={`item.${item._id}.image`}
        style={[StyleSheet.absoluteFillObject]}
      >
        <Image
          source={{ uri: item.picturePath }}
          style={[StyleSheet.absoluteFillObject]}
        />
      </SharedElement>
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
      <SharedElement
        id="display.poster"
        style={[
          StyleSheet.absoluteFillObject,
          { transform: [{ translateY: height }] },
        ]}
      >
        <View
          style={[
            StyleSheet.absoluteFillObject,
            { transform: [{ translateY: -height * 0.3 }] },
            ,
            styles.detailsContainer,
          ]}
        >
          <Text style={styles.title}>{item.name}</Text>
          <Text>{item.maplocation}</Text>
        </View>
      </SharedElement>
    </View>
  );
};

SinglePostScreen.sharedElements = (route) => {
  const { item } = route.params;
  return [
    {
      id: "display.poster",
    },
    {
      id: `item.${item._id}.image`,
    },
  ];
};

export default SinglePostScreen;
