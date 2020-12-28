import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Link } from '@react-navigation/native';

const SignupScreen = () => {
  // const [formState, setFormState] = useState({
  //   username: "",
  //   email: "",
  //   password: "",
  // });

  return (
    <SafeAreaView>
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
      <View>
        {/* This Link will need to hook up to the login page */}
        <Text>Already have an account? Head to our <Link style={styles.linkText} to="/Login">Login page</Link></Text>
      </View>
      <View>
        {/* This Link will need to hook up to the Home page */}
        <Text><Link style={styles.linkText} to="/Home">Home</Link></Text>
      </View>

    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  linkText :{
      color: 'blue'
  }
})


export default SignupScreen;
