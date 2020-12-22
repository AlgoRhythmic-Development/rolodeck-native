import { StatusBar } from "expo-status-bar";
import React from "react";
import { gql, useQuery, useMutation } from "@apollo/client";
import { Button, Text } from "react-native";
import { QUERY_ME } from "../utils/queries";

const ProfileScreen = ({ navigation }) => {
  const { data, loading } = useQuery(QUERY_ME);

  const me = data?.me || {};

  if (!loading) {
    console.log(data);
  }

  return (
    <>
      <StatusBar style="auto" />
      <Text>{me.username}'s Profile Page</Text>
      <Text>{me.email}</Text>
      <Button
        title="Click me to go home"
        onPress={() => navigation.navigate("Home", { name: "Dummy" })}
      />
    </>
  );
};

export default ProfileScreen;
