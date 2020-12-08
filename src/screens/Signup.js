import React, { useState } from "react";
import { Text, View, TextInput, Button } from 'react-native';

const Signup = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  return (
    <View>
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

export default Signup;
