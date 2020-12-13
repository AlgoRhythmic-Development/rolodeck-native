import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text } from "react-native";

const HomeScreen = ({ route, navigation }) => {
  const { name } = route.params;

  return (
    <>
      <StatusBar style="auto" />
      <Text>Welcome home, {name}!</Text>
      {/* This button will navigate to the "Profile" route defined in the navigator stack within App.js */}
      <Button
        title="Click me to view profile"
        onPress={() => navigation.navigate("Profile", { name: "Dummy" })}
      />
      <Button
        title="Click me to Signup"
        onPress={() => navigation.navigate("Signup", { name: "Dummy" })}
      />
    </>
  );
};

export default HomeScreen;
