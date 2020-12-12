// react-native-gesture-handler MUST BE AT TOP OF IMPORTS
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
// import { StyleSheet, Text, View } from "react-native";

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";

const Stack = createStackNavigator();

const client = new ApolloClient({
  uri: "/graphql", 
  cache: new InMemoryCache()
})

const App = () => {
  return (
    <NavigationContainer>
      <ApolloProvider client={client}>
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
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            initialParams={{ name: "Dummy" }}
            options={{
              title: "Home",
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
      </ApolloProvider>
    </NavigationContainer>
  );
};

export default App;