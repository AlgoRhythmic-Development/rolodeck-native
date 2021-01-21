import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, Text } from "react-native";
import AnimatedLoader from "react-native-animated-loader";

const Loading = () => {
  return (
    <AnimatedLoader
      visible={true}
      source={require("../assets/lottie/contact-fill.json")}
      animationStyle={{ width: "100%", height: "100%" }}
      speed={0.5}
    />
  );
};

export default Loading;
