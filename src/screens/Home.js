import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Link } from "@react-navigation/native";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";


const Home = ({ route, navigation }) => {
  // We'll add this in at a later time.
  // redirect to my cards page if username is the logged-in user's
  if (Auth.loggedIn() === true) {
    // return <Redirect to="/cards" />;
    console.log("logged in");
    Auth.getProfile();
  } else {
    console.log("not logged in");
  }


  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Text>Welcome to RoloDeck!</Text>
      <Text>Join a community of business professionals.</Text>
      <Text>Log in or sign-up to get started!</Text>
      <Button
        title="Get Started"
        onPress={() => navigation.navigate("Login", { name: "Login" })}
      />

      <Button
        title="Test GraphQL"
        onPress={() => navigation.navigate("FetchTest")}
      />
      <Button title="Log In" onPress={() => navigation.navigate("Login")} />
    </SafeAreaView>
  );
};

  

export default Home;
