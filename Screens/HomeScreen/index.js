import React, { useState, useEffect} from "react";
import { View, ScrollView } from "react-native";
// Components //
import { Header, LocationList } from "./Components";
// Styles //
import { styles } from "./styles";
// Api components //
import axios from "axios";
import baseUrl from "../../assets/common/baseUrl";

const HomeScreen = () => {
  const [location, setLocation] = useState([]);
  // Location Filter list //
  useEffect(() => {
    axios
      .get(`${baseUrl}location/locationlist`)
      .then((res) => {
        setLocation(res.data);
       
      })
      .catch((error) => {
        console.log("Api Error");
      });
    return () => {
      setLocation([]);
    };
  }, []);

  return (
    <View style={styles.homeConatiner}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
      >
        <Header />
        <LocationList item={location}/>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
