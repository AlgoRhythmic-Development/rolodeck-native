import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text } from "react-native";
import { gql, useQuery } from "@apollo/client";
// import { QUERY_USERS } from "../utils/queries";
// import gql from "graphql-tag";

const FetchTest = ({ route, navigation }) => {
  const QUERY_USERS = gql`
    query users {
      users {
        _id
        username
        email
        cards {
          _id
          logoUrl
          companyName
          tagline
          name
          jobTitle
          website
          phone
          email
        }
      }
    }
  `;

  // const { name } = route.params;

  const { data, loading } = useQuery(QUERY_USERS);

  let users;

  data ? (users = data.users) : (users = "User data unavailable...");

  users?.forEach((user) => {
    console.log(user.username);
  });

  return (
    <View>
      <StatusBar style="auto" />
      <Text>Test GraphQL on this Screen</Text>
      <Text>"QUERY_USER" response:</Text>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        // this isn't working for some reason, need to look into forEach/map functions within react-native?
        users.forEach((user) => {
          <Text>{user.username}</Text>;
        })
      )}
    </View>
  );
};

export default FetchTest;
