import React from "react";
import { View, Text, Image } from "react-native";
import { styles } from "../styles";

const EmptyPosts = () => {
  return (
    <View style={styles.emptyContainer}>
      <Image style={styles.imgEmpty} source={{ uri: "https://i.ibb.co/3R162gB/unhappy.png" }} />
      <Text style={styles.emptyText}>No Events Found</Text>
    </View>
  );
};

export default EmptyPosts;
