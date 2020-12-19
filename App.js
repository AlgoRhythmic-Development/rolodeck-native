// react-native-gesture-handler MUST BE AT TOP OF IMPORTS
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { AppRegistry } from "react-native";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
// import { StyleSheet, Text, View } from "react-native";

import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Create from "./src/screens/Create";
import FetchTest from "./src/screens/FetchTest";
import ProfileScreen from "./src/screens/ProfileScreen";
import SignupScreen from "./src/screens/Signup";
import NoMatch from "./src/screens/NoMatch";
import Contact from "./src/screens/Contact";

const Stack = createStackNavigator();

const cache = new InMemoryCache();

// Initialize Apollo Client
const client = new ApolloClient({
  request: (operation) => {
    const token = AsyncStorage.getItem("id_token");

    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : "",
      },
    });
  },
  uri: "https://rolodeck-native-server.herokuapp.com/graphql",
  cache,
  defaultOptions: { watchQuery: { fetchPolicy: "cache-and-network" } },
});

const App = () => {
  return (
    <ApolloProvider client={client}>
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
          <Stack.Screen
            name="FetchTest"
            component={FetchTest}
            initialParams={{ name: "Dummy" }}
            options={{
              title: "GraphQL Testing",
            }}
          />
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
            name="Create"
            component={Create}
            options={{
              title: "Create",
            }}
          />
          <Stack.Screen
            name="Profile"
            component={ProfileScreen}
            options={({ route }) => ({
              title: route.params.name,
            })}
          />
          <Stack.Screen
            name="Signup"
            component={SignupScreen}
            options={({ route }) => ({
              title: route.params.name,
            })}
          />
          <Stack.Screen
            name="Contact"
            component={Contact}
            options={({ route }) => ({
              title: route.params.name,
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
};

export default App;
