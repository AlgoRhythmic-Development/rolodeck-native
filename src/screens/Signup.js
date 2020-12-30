import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Link } from '@react-navigation/native';
import { Formik } from 'formik';

// const SignupScreen = () => {
//   // const [formState, setFormState] = useState({
//   //   username: "",
//   //   email: "",
//   //   password: "",
//   // });

 // this form will need styles from a global styles sheet.
export default function SignupScreen() {

  // this is where we'll need to pass the sign up data to the back end.
  return(
      <View>
          <Text>Signup</Text>
          <Formik
              initialValues={{ username: '', email: '', password: '' }}
              onSubmit={(values, actions) => {
                  actions.resetForm();
                  console.log(values);
              }}
          >
              {(props) => (
                  <View>
                      <TextInput
                          placeholder='Enter a username'
                          onChangeText={props.handleChange('username')}
                          value={props.values.username} 
                      />  

                      <TextInput
                          placeholder='Enter your email'
                          onChangeText={props.handleChange('email')}
                          value={props.values.email} 
                      />  

                      <TextInput
                          placeholder='Create a password'
                          onChangeText={props.handleChange('password')}
                          value={props.values.password} 
                      />   

                      <Button title='submit' onPress={props.handleSubmit} />
                  </View>
              )}
          </Formik>
      </View>
  )
}
      
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
//     </View>
//   );
// };
// const styles = StyleSheet.create({
//   linkText :{
//       color: 'blue'
//   }
// })
// export default SignupScreen;
