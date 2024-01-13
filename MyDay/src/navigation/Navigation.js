import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import React from "react";
import Home from "../screens/user/Home";
import Chats from "../screens/user/Chats";
import Profile from "../screens/user/Profile";
import Store from "../screens/user/Store";
import Vendors from "../screens/user/Vendors";
import { primaryPink, secondaryWhite, text } from "../Constants/Colors";
import { FontAwesome6 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeTabNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      tabBarLabelStyle: { fontWeight: "bold", color: primaryPink },
      tabBarStyle: { display: "flex" },
    }}
  >
    <Tab.Screen
      name="Discover"
      component={Home}
      options={{
        headerShown: false,
        tabBarLabel: "Home",
        tabBarIcon: ({ focused }) => (
          <Feather
            name="home"
            size={24}
            color={focused ? primaryPink : "black"}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Vendors"
      component={Vendors}
      options={{
        headerShown: false,
        tabBarLabel: "Vendors",
        tabBarIcon: ({ focused }) => (
          <Feather
            name="star"
            chatmessage
            size={24}
            color={focused ? primaryPink : "black"}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Chats"
      component={Chats}
      options={{
        headerShown: false,
        tabBarLabel: "Chats",
        tabBarIcon: ({ focused }) => (
          <Feather
            name="message-circle"
            message
            size={24}
            color={focused ? primaryPink : "black"}
          />
        ),
      }}
    />
    <Tab.Screen
      name="Store"
      component={Store}
      options={{
        headerShown: false,
        tabBarLabel: "Store",
        tabBarIcon: ({ focused }) => (
          <MaterialCommunityIcons
            name="face-man-outline"
            size={24}
            color={focused ? primaryPink : "black"}
          />
        ),
      }}
    />
  </Tab.Navigator>
);
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SellerHome"
          component={HomeTabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
