import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  FlatList,
  Image,
  Animated,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";
// Components //
import { Header, HeaderDataText, EmptyPosts } from "./Components";
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

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState([]);
  const [posterData, setPosterData] = useState([]);
  const [locationFilter, setLocationFilter] = useState("");
  // Loader //
  const [loading, setLoading] = useState(true);

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
        setLoading(false);
      })
      .catch((error) => {
        console.log("Api Error", error);
      });
    return () => {
      setLocation([]);
    };
  }, []);

  // Posts List //
  const postsFilter = () => {
    axios
      .get(`${baseUrl}post?location=${locationFilter}`)
      .then((res) => {
        setPosterData(res.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));

    return () => {
      setPosterData([]);
    };
  };

  // Render posts //
  useEffect(() => {
    postsFilter();
  }, [locationFilter]);

  // Poster flow //
  useEffect(() => {
    if (index === posterData.length - 3) {
      const newPosterData = [...posterData, ...posterData];
      setPosterData(newPosterData);
    }
  });

  return (
    <>
      {loading === false ? (
        <View style={styles.homeConatiner}>
          <ScrollView
            contentContainerStyle={{ paddingBottom: 150 }}
            showsVerticalScrollIndicator={false}
          >
            {/* Header */}
            <Header />
            {/* Location Filter */}
            <View style={styles.searchedMostConatiner}>
              <Text style={styles.headingText}>Discover City Treasures</Text>
              <FlatList
                horizontal
                data={location}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{ marginTop: 15 }}
                keyExtractor={(item) => item._id}
                renderItem={({ item, index }) => (
                  <TouchableOpacity
                    onPress={() => setLocationFilter(item._id)}
                    style={[
                      styles.btnMostSearched,
                      {
                        marginLeft: index == 0 ? 10 : 12,
                        marginRight: index == item.length - 1 ? 10 : 0,
                      },
                    ]}
                  >
                    <View
                      style={[
                        styles.imgContainer,
                        {
                          backgroundColor:
                            item._id === locationFilter ? "#F56A79" : "#EEEEEE",
                        },
                      ]}
                    >
                      <Image
                        style={styles.imgIcon}
                        source={{ uri: item.icon }}
                      />
                    </View>
                    <Text style={styles.dataTextSearched}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
            </View>
            {/* posterList null filter */}
            {posterData.length > 0 ? (
              <>
                {/*  Name of poster & date */}
                <HeaderDataText
                  data={posterData}
                  scrollXAnimated={scrollXAnimated}
                />
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
                        const newStyle = [
                          style,
                          { zIndex: posterData.length - index },
                        ];
                        return (
                          <View style={newStyle} index={index} {...props}>
                            {children}
                          </View>
                        );
                      }}
                      renderItem={({ item, index: i }) => {
                        const inputRange = [index - 1, index, i + 1];
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
                            <TouchableOpacity
                              activeOpacity={0.9}
                              onPress={() => {
                                navigation.navigate("SinglePostScreen", {
                                  item: posterData[index],
                                });
                              }}
                            >
                              <Image
                                source={{ uri: item.picturePath }}
                                style={styles.posterImg}
                              />
                            </TouchableOpacity>
                          </Animated.View>
                        );
                      }}
                    />
                  </FlingGestureHandler>
                </FlingGestureHandler>
              </>
            ) : (
              <EmptyPosts />
            )}
          </ScrollView>
        </View>
      ) : (
        <View style={styles.homeConatiner}>
          <ActivityIndicator
            style={styles.loaderIcon}
            size="large"
            color="#374259"
          />
        </View>
      )}
    </>
  );
};

export default HomeScreen;
