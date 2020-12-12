import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text } from "react-native";
import { gql, useQuery } from "@apollo/client";
// import { QUERY_USERS } from "../utils/queries";
// import gql from "graphql-tag";

const HomeScreen = ({ route, navigation }) => {
  const QUERY_USER = gql`
    query user($username: String!) {
      user(username: $username) {
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
        collectedCards {
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

  const { name } = route.params;

  const { data, loading } = useQuery(QUERY_USER, {
    variables: { username: "Turner_Hermiston88" },
  });
  let userData;
  data ? (userData = data) : (userData = "User data unavailable...");
  console.log(data);

  return (
    <>
      <StatusBar style="auto" />
      <Text>Welcome home, {name}!</Text>
      <Text>{userData}</Text>
      {/* This button will navigate to the "Profile" route defined in the navigator stack within App.js */}
      <Button
        title="Click me to view profile"
        onPress={() => navigation.navigate("Profile", { name: "Dummy" })}
      />
    </>
  );
};

export default HomeScreen;
