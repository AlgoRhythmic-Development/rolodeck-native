import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Link } from '@react-navigation/native';
import { Formik } from 'formik';

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
        <Formik 
          initialValues={{ username: '', email: '', password: '' }}
          onSubmit={(values) => {
            console.log(values)
          }}
        >
          {(props)=> (
            <View>
              <TextInput
                placeholder='Username'
                onChangeText={props.handleChange('username')}
                value={props.values.username}
              />
              <TextInput
                placeholder='Email'
                onChangeText={props.handleChange('email')}
                value={props.values.email}
              />
              <TextInput
                placeholder='Password'
                onChangeText={props.handleChange('password')}
                value={props.values.password}
              />

              <Button title='submit' onPress={props.handleSumbit}></Button>
            </View>
          )}      
        </Formik>
      </View>
      
      {/* <View>
        <TextInput placeeholder="Enter Username" />
        <TextInput placeholder="Enter Email" />
        <TextInput
          secureTextEntry={true}
          placeholder="Enter Password"
        />
        <Button title="Submit"></Button>
      </View> */}
      {/* <View> */}
        {/* This Link will need to hook up to the login page */}
        {/* <Text>Already have an account? Head to our <Link style={styles.linkText} to="/Login">Login page</Link></Text>
      </View>
      <View> */}
        {/* This Link will need to hook up to the Home page */}
        {/* <Text><Link style={styles.linkText} to="/Home">Home</Link></Text>
      </View> */}

    </View>

  );
};

const styles = StyleSheet.create({
  linkText :{
      color: 'blue'
  }
})


export default SignupScreen;
