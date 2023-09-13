import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles";

const LocationList = ({ item }) => {
  return (
    <View style={styles.searchedMostConatiner}>
      <Text style={styles.headingText}>Discover City Treasures</Text>
      <FlatList
        horizontal
        data={item}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ marginTop: 15 }}
        keyExtractor={(item) => item._id}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={[
              styles.btnMostSearched,
              {
                marginLeft: index == 0 ? 10 : 12,
                marginRight: index == item.length - 1 ? 10 : 0,
              },
            ]}
          >
            <View style={styles.imgContainer}>
              <Image style={styles.imgIcon} source={{ uri: item.icon }} />
            </View>
            <Text style={styles.dataTextSearched}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default LocationList;
