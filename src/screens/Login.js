import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useStoreContext } from "../utils/Store";
import { LOG_IN, LOG_OUT } from "../utils/actions";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
} from "react-native";
import { Link } from "@react-navigation/native";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = ({ route, navigation }) => {
  const [state, dispatch] = useStoreContext();

  const prevLoginCheck = async () => {
    const check = await Auth.loggedIn();
    console.log("check:");
    console.log(check);
    if (check) {
      dispatch({ type: LOG_IN });
    }
  };

  prevLoginCheck();

  const [login, { error }] = useMutation(LOGIN_USER);

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
      dispatch({ type: LOG_IN });
    } catch (e) {
      console.error(e);
      // clear form values
      setEmailInput("");
      setPasswordInput("");
    }
  };

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
        {/* This Link will need to hook up to the sign up page */}
        <Text>
          Need to create an account? Head to our{" "}
          <Link style={styles.linkText} to="/Signup">
            signup page
          </Link>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  linkText: {
    color: "blue",
  },
});
export default Login;
