import React, { useState } from "react";
import { Text, View, TextInput, Button } from 'react-native';
import { StatusBar } from "expo-status-bar";

const SignupScreen = () => {
  // const [formState, setFormState] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  return (
    <View>
      <StatusBar style='auto' />
      <Text> Login Form </Text>
      <View>
        <TextInput placeeholder="Enter Username" />
        <TextInput placeholder="Enter Email" />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
        />
        <Button title="Submit"></Button>
      </View>
    </View>
  );
};

export default SignupScreen;
