import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, SafeAreaView, Text } from "react-native";
import Auth from "../utils/auth";

const Loading = () => {
  return (
    <SafeAreaView>
      <StatusBar style="auto" />
      <Text>Loading user profile...</Text>
    </SafeAreaView>
  );
};

export default Loading;
