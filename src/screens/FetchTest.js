import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React from "react";
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  StyleSheet,
  Button,
} from "react-native";
import { gql, useQuery, useMutation } from "@apollo/client";
import { QUERY_USERS } from "../utils/queries";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

const FetchTest = () => {
  const [addUser] = useMutation(ADD_USER);
  const addUserTest = async () => {
    try {
      const { data } = await addUser({
        variables: {
          username: "kaya",
          email: "kayathebean@gmail.com",
          password: "123456",
        },
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
    return console.log(data);
  };

  const { data, loading } = useQuery(QUERY_USERS);

  let usersArr = data?.users || [];

  usersArr.forEach((user) => {
    console.log(user.username);
    console.log(user.email);
  });

  console.log("users: " + usersArr);

  // found this solution to using forEach in react-native. Looks like you essentially have to push each iteration into a single array, then simply insert the array into the jsx where needed.
  let userList = [];
  usersArr.forEach(function (user, i) {
    userList.push(
      <View key={i} style={styles.list}>
        <Text>{user.username}</Text>
      </View>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <Text>Test GraphQL on this Screen</Text>
      <Button title="Add User" onPress={() => addUserTest()} />
      <Button title="Login" onPress={() => loginUserTest()} />
      <Text>"QUERY_USER" response:</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        // see line 40
        <ScrollView>{userList}</ScrollView>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  list: {
    marginTop: "10%",
  },
});

export default FetchTest;
