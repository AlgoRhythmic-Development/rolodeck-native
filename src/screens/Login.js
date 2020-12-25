import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from "@react-navigation/native";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = ({ route, navigation }) => {
  const [login, { error }] = useMutation(LOGIN_USER);

  const logoutUser = async () => {
    try {
      await Auth.logout();
    } catch (e) {
      console.error(e);
    }
  };

  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const userInput = {
    email: emailInput,
    password: passwordInput,
  };

  // submit form
  const handleFormSubmit = async () => {
    try {
      const { data } = await login({
        variables: { ...userInput },
      });
      await Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setEmailInput("");
    setPasswordInput("");

    navigation.navigate("Profile");
  };

  return (
    <View>
      <StatusBar style="auto" />
      <Text> Sign in</Text>
      <View>
        <TextInput
          name="email"
          placeholder="Email"
          onChangeText={(text) => setEmailInput(text)}
          defaultValue={emailInput}
        />
        <TextInput
          name="password"
          secureTextEntry={true}
          placeholder="Password"
          onChangeText={(text) => setPasswordInput(text)}
          defaultValue={passwordInput}
        />
        <Button title="Submit" onPress={() => handleFormSubmit()} />
        <Button title="Logout" onPress={() => logoutUser()} />
      </View>
      <View>
        <Button title="queryMe" onPress={() => runMyQuery()} />
      </View>
      <View>
        {/* This Link will need to hook up to the sign up page */}
        <Text>
          Need to create an account? Head to our{" "}
          <Link style={styles.linkText} to="/Signup">
            signup page
          </Link>
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  linkText: {
    color: "blue",
  },
});
export default Login;
