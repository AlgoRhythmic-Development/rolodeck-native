import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text } from "react-native";

const ProfileScreen = ({ route, navigation }) => {
  const { name } = route.params;

  return (
    <>
      <StatusBar style="auto" />
      <Text>{name}'s Profile Page</Text>
      <Button
        title="Click me to go home"
        onPress={() => navigation.navigate("Home", { name: "Dummy" })}
      />
    </>
  );
};

export default ProfileScreen;
