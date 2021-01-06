import React, { useState } from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View, SafeAreaView } from 'react-native';
import { StatusBar } from "expo-status-bar";
import { Link } from '@react-navigation/native';
import { Formik } from 'formik';
import { useStoreContext } from "../utils/Store";
import { LOG_IN } from "../utils/actions";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import Auth from "../utils/auth";

// this form will need styles from a global styles sheet.
export default function SignupScreen() {

  const [state, dispatch] = useStoreContext();
  
  // this is where we'll need to pass the sign up data to the back end.
  const [addUser, { error }] = useMutation(ADD_USER);

  const handleFormSubmit = async ({ values }) => {
    try {
      const { data } = await addUser({
        variables: { ...values },
      });
      console.log(data);
      await Auth.login(data.addUser.token);
      dispatch({ type: LOG_IN });
    } catch (e) {
      console.error(e);
      // // clear form values
      // setEmailInput("");
      // setPasswordInput("");
    }
  };

  return (
    <SafeAreaView>
      <Text>Signup</Text>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          handleFormSubmit({ values });
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
              // secureTextEntry={true}
            />
            <Button title='Submit' onPress={props.handleSubmit} />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  )
}


// const SignupScreen = () => {
//   // const [formState, setFormState] = useState({
//   //   username: "",
//   //   email: "",
//   //   password: "",
//   // });

//   return (
//     <SafeAreaView>
//       <StatusBar style='auto' />
//       <Text> Login Form </Text>
//       <View>
//         <TextInput placeholder="Enter Username" />
//         <TextInput placeholder="Enter Email" />
//         <TextInput
//           secureTextEntry={true}
//           placeholder="Enter Password"
//         />
//         <Button title="Submit"></Button>
//       </View>
//       <View>
//         {/* This Link will need to hook up to the login page */}
//         <Text>Already have an account? Head to our <Link style={styles.linkText} to="/Login">Login page</Link></Text>
//       </View>
//       <View>
//         {/* This Link will need to hook up to the Home page */}
//         <Text><Link style={styles.linkText} to="/Home">Home</Link></Text>
//       </View>

//     </SafeAreaView>

//   );
// };

// const styles = StyleSheet.create({
//   linkText :{
//       color: 'blue'
//   }
// })


// export default SignupScreen;
