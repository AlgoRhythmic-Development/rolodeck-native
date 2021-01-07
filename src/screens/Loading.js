import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, Text, View } from "react-native";
import Auth from "../utils/auth";

const Loading = () => {
  return (
    <View>
      <StatusBar style="auto" />
      <Text>Loading user profile...</Text>
    </View>
  );
};

export default Loading;
