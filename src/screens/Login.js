import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from "react-native";
import { Link } from "@react-navigation/native";
import { useLazyQuery, useMutation } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const Login = ({ route, navigation }) => {
  const [login, { error }] = useMutation(LOGIN_USER);

  const loginUserTest = async () => {
    try {
      const { data } = await login({
        variables: {
          email: "kayathebean@gmail.com",
          password: "123456",
        },
      });

      Auth.login(data.login.token);
      return console.log(data.login);
    } catch (e) {
      console.error(e);
    }
  };

  const logoutUserTest = async () => {
    console.log("attempting to log out...");
    try {
      await Auth.logout();
      return console.log("logged out successfully");
    } catch (e) {
      console.error(e);
    }
  };

  const [queryMe, { data }] = useLazyQuery(QUERY_ME);

  const runMyQuery = () => {
    queryMe();
    console.log(queryMe());
    console.log(data);
  };
  //   console.log(Auth.getProfile());

  // We'll add this in at a later time.
  // const [formState, setFormState] = useState({ email: "", password: "" });

  // const [login, { error }] = useMutation(LOGIN_USER);

  // // update state based on form input changes
  // const handleChange = (event) => {
  //   const { name, value } = event.target;

  //   setFormState({
  //     ...formState,
  //     [name]: value,
  //   });
  // };

  // // submit form
  // const handleFormSubmit = async (event) => {
  //   event.preventDefault();

  //   try {
  //     const { data } = await login({
  //       variables: { ...formState },
  //     });

  //     Auth.login(data.login.token);
  //   } catch (e) {
  //     console.error(e);
  //   }

  //   // clear form values
  //   setFormState({
  //     email: "",
  //     password: "",
  //   });
  // };

  return (
    <View>
      <StatusBar style="auto" />
      <Text> Sign in</Text>
      <View>
        <Button title="Test Login" onPress={() => loginUserTest()} />
        <Button title="Test Logout" onPress={() => logoutUserTest()} />
        <TextInput placeholder="Email" />
        <TextInput secureTextEntry={true} placeholder="Password" />
        <Button
          title="Submit"
          onPress={() => Alert.alert("Under construction")}
        />
      </View>
      <View>
        <Text>No user logged in...</Text>
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
