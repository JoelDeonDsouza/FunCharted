import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// ! Bottom Tabs //
import Tabs from "./Navigation/Tabs";
// Stacks navigation//
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* Tabs */}
        <Stack.Screen name="HomeScreen" component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
