import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Alert,
  Button,
  Keyboard,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import CardForm from "../components/CardForm";

const Create = ({ route, navigation }) => {
  return (
    <SafeAreaView>
      <Text>Create a Business Card</Text>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <CardForm />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default Create;
