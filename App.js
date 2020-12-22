// react-native-gesture-handler MUST BE AT TOP OF IMPORTS
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppRegistry, TabBarIOS } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
// import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Create from "./src/screens/Create";
import FetchTest from "./src/screens/FetchTest";
import ProfileScreen from "./src/screens/ProfileScreen";
import SignupScreen from "./src/screens/Signup";
import NoMatch from "./src/screens/NoMatch";
import Contact from "./src/screens/Contact";
import Collection from './src/screens/Collection';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const cache = new InMemoryCache();

// Initialize Apollo Client
const client = new ApolloClient({
  uri: "https://rolodeck-native-server.herokuapp.com/graphql",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      {/* Create navigator stack which will hold all "routes".
      initialRouteName determines default route. */}
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Home' component={Home} />
          <Tab.Screen name='Collection' component={Collection} />
          <Tab.Screen name='Create' component={Create} />
          <Tab.Screen name='Contact' component={Contact} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
