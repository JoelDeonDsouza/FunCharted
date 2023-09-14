import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// ! Bottom Tabs //
import Tabs from "./Navigation/Tabs";
// Screens//
import { HomeScreen, SinglePostScreen } from "./Screens";
// Stacks navigation//
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={"HomeScreen"}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SinglePostScreen" component={SinglePostScreen} />
         {/* Tabs */}
         <Stack.Screen name="HomeScreen" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
