// react-native-gesture-handler MUST BE AT TOP OF IMPORTS
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
// import { StyleSheet, Text, View } from "react-native";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      {/* Create navigator stack which will hold all "routes".
      initialRouteName determines default route. */}
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: "#212121" },
          headerTintColor: "#FFCB6B",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* Add a Stack.Screen component for each screen you want to add to navigation.
        It requires a name Prop which will be used to navigate to that screen from anywhere,
        as well as a component prop which tells the navigator which prop to render for that route. */}
        {/* <Stack.Screen
          name="Home"
          component={HomeScreen}
          initialParams={{ name: "Dummy" }}
          options={{
            title: "Home",
          }}
        /> */}
        <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
        />
        <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
        }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
