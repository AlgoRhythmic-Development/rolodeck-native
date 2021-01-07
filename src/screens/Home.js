import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, SafeAreaView } from "react-native";
import { Link } from "@react-navigation/native";
import { QUERY_ME } from "../utils/queries";
import Auth from "../utils/auth";
import { useStoreContext } from "../utils/Store";
import { LOG_IN, LOG_OUT } from "../utils/actions";

const Home = ({ route, navigation }) => {
  const [state, dispatch] = useStoreContext();

  const [show, setShow] = useState(false);

  const logoutUser = async () => {
    try {
      await Auth.logout();
      dispatch({ type: LOG_OUT });
    } catch (e) {
      console.error(e);
    }
  };

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

      <Button title="Log Out" onPress={() => logoutUser()} />
    </SafeAreaView>
  );
};

export default Home;
