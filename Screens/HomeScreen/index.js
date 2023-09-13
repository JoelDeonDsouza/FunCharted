import React, { useState, useEffect, useRef } from "react";
import { View, ScrollView, FlatList, Image, Animated } from "react-native";
// Components //
import { Header, LocationList, HeaderDataText } from "./Components";
// Styles //
import { styles } from "./styles";
// Api components //
import axios from "axios";
import baseUrl from "../../assets/common/baseUrl";
// Handle gestures //
import {
  FlingGestureHandler,
  Directions,
  State,
} from "react-native-gesture-handler";

const HomeScreen = () => {
  const [location, setLocation] = useState([]);
  const [posterData, setPosterData] = useState([]);
  // Poster animations //
  const scrollXIndex = useRef(new Animated.Value(0)).current;
  const scrollXAnimated = useRef(new Animated.Value(0)).current;
  const [index, setIndex] = useState(0);
  const setActiveIndex = React.useCallback((activeIndex) => {
    scrollXIndex.setValue(activeIndex);
    setIndex(activeIndex);
  });
  // Animation //
  useEffect(() => {
    Animated.spring(scrollXAnimated, {
      toValue: scrollXIndex,
      useNativeDriver: true,
    }).start();
  });

  // Location Filter list //
  useEffect(() => {
    axios
      .get(`${baseUrl}location/locationlist`)
      .then((res) => {
        setLocation(res.data);
      })
      .catch((error) => {
        console.log("Api Error", error);
      });
    return () => {
      setLocation([]);
    };
  }, []);

  // Post Data //
  useEffect(() => {
    axios
      .get(`${baseUrl}post`)
      .then((res) => {
        setPosterData(res.data);
      })
      .catch((error) => console.log(error));

    return () => {
      setPosterData([]);
    };
  }, []);

  // Poster flow//
  useEffect(() => {
    if (index === posterData.length - 3) {
      const newPosterData = [...posterData, ...posterData];
      setPosterData(newPosterData);
    }
  });

  return (
    <View style={styles.homeConatiner}>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 150 }}
        showsVerticalScrollIndicator={false}
      >
        {/* Header */}
        <Header />
        {/* Location Filter */}
        <LocationList item={location} />
        {/*  Name of poster & date */}
        <HeaderDataText data={posterData} scrollXAnimated={scrollXAnimated} />
        {/*  poster */}
        <FlingGestureHandler
          key="left"
          direction={Directions.LEFT}
          onHandlerStateChange={(e) => {
            if (e.nativeEvent.state === State.END) {
              if (index === posterData.length - 1) {
                return;
              }
              setActiveIndex(index + 1);
            }
          }}
        >
          <FlingGestureHandler
            key="right"
            direction={Directions.RIGHT}
            onHandlerStateChange={(e) => {
              if (e.nativeEvent.state === State.END) {
                if (index === 0) {
                  return;
                }
                setActiveIndex(index - 1);
              }
            }}
          >
            <FlatList
              style={styles.flexSlider}
              data={posterData}
              keyExtractor={(_, index) => String(index)}
              horizontal
              inverted
              scrollEnabled={false}
              removeClippedSubviews={false}
              contentContainerStyle={{
                flex: 1,
                justifyContent: "center",
                padding: 10 * 2,
              }}
              CellRendererComponent={({
                item,
                index,
                children,
                style,
                ...props
              }) => {
                const newStyle = [style, { zIndex: posterData.length - index }];
                return (
                  <View style={newStyle} index={index} {...props}>
                    {children}
                  </View>
                );
              }}
              renderItem={({ item, index }) => {
                const inputRange = [index - 1, index, index + 1];
                const translateX = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [50, 0, -100],
                });
                const scale = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [0.8, 1, 1.3],
                });
                const opacity = scrollXAnimated.interpolate({
                  inputRange,
                  outputRange: [1 - 1 / 3, 1, 0],
                });
                return (
                  <Animated.View
                    style={[
                      styles.imgContainerPoster,
                      {
                        opacity,
                        transform: [
                          {
                            translateX,
                          },
                          { scale },
                        ],
                      },
                    ]}
                  >
                    <Image
                      source={{ uri: item.picturePath }}
                      style={styles.posterImg}
                    />
                  </Animated.View>
                );
              }}
            />
          </FlingGestureHandler>
        </FlingGestureHandler>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
