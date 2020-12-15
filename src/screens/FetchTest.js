import { StatusBar } from "expo-status-bar";
import Constants from "expo-constants";
import React from "react";
import {
  View,
  SafeAreaView,
  SectionList,
  Text,
  StyleSheet,
} from "react-native";
import { gql, useQuery } from "@apollo/client";

const FetchTest = () => {
  const QUERY_USERS = gql`
    query users {
      users {
        _id
        username
        email
      }
    }
  `;

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
      <Text>"QUERY_USER" response:</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        // see line 40
        userList
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
