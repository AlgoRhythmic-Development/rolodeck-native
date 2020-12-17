import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from "react-native";
import { Link } from "@react-navigation/native";
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const Home = ({ route, navigation }) => {
  // We'll add this in at a later time.
  // redirect to my cards page if username is the logged-in user's
  // if (Auth.loggedIn()) {
  //     return <Redirect to="/cards" />;
  // }

  const bottomTabNavigator = createBottomTagNavigator(
      {
          Home: Home,
          Login: Login,
      },
      {
          initialRouteName: 'Home'
      }
  );

  return (
    <View>
      <StatusBar style="auto" />
      <Text>Welcome to RoloDeck!</Text>
      <Text>Join a community of business professionals.</Text>
      <Text>Log in or sign-up to get started!</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Login", { name: "Login" })}
      />

      <Text>
        This exists to test <Link to="/Create">create page</Link>
      </Text>
      <Text>
        This exists to test <Link to="/Contact">contact page</Link>
      </Text>
      <Button
        title="Test GraphQL"
        onPress={() => navigation.navigate("FetchTest")}
      />
    </View>
  );
};

export default Home;
