import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen, ProfileScreen } from "../Screens";
// Icons //
import Icon from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="shapes"
              size={32}
              style={{ color: focused ? "#BC7AF9" : "#DFDFDE" }}
            />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon
              name="person-sharp"
              size={32}
              style={{ color: focused ? "#BC7AF9" : "#DFDFDE" }}
            />
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
