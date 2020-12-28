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
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { SafeAreaView, StyleSheet } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Create from "./src/screens/Create";
import FetchTest from "./src/screens/FetchTest";
import ProfileScreen from "./src/screens/ProfileScreen";
import SignupScreen from "./src/screens/Signup";
import Contact from "./src/screens/Contact";
import Collection from "./src/screens/Collection";
import ScanScreen from "./src/screens/ScanScreen";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const cache = new InMemoryCache();

const httpLink = createHttpLink({
  uri: "https://rolodeck-native-server.herokuapp.com/graphql",
});

let token;

const getToken = async () => {
  const storedToken = await AsyncStorage.getItem("id_token");

  return (token = storedToken);
};

getToken();

const authLink = setContext((_, { headers, ...context }) => {
  console.log("header token:");
  console.log(token);
  return {
    headers: {
      ...headers,
      ...(token ? { authorization: `Bearer ${token}` } : {}),
    },
    ...context,
  };
});

const link = ApolloLink.from([authLink, httpLink]);

// Initialize Apollo Client
const client = new ApolloClient({
  // request: async (operation) => {
  //   const token = await AsyncStorage.getItem("id_token");

  //   operation.setContext({
  //     headers: {
  //       authorization: token ? `Bearer ${token}` : "",
  //     },
  //   });
  // },
  // uri: "https://rolodeck-native-server.herokuapp.com/graphql",
  link: link,
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

const App = () => {
  return (
    <>

      <ApolloProvider client={client}>
        {/* Create navigator stack which will hold all "routes".
      initialRouteName determines default route. */}
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Collection' component={Collection} />
            <Tab.Screen name='Scan' component={ScanScreen} />
            <Tab.Screen name='Create' component={Create} />
            <Tab.Screen name='Contact' component={Contact} />
          </Tab.Navigator>
        </NavigationContainer>
      </ApolloProvider>
    </>
  );
};


export default App;
