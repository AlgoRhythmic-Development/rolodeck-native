import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { useStoreContext } from "../utils/Store";
import { LOG_IN, LOG_OUT } from "../utils/actions";
import { Button, Keyboard, Text, TextInput, TouchableWithoutFeedback, View, SafeAreaView } from "react-native";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";
import Auth from "../utils/auth";
import { Formik } from "formik";

// this form will need styles from a global styles sheet. Change name of function to Login
export default function Login() {
  // this is where we'll need to pass the login data to the back end.
  const [state, dispatch] = useStoreContext();

  const prevLoginCheck = async () => {
    const check = await Auth.loggedIn();
    if (check) {
      dispatch({ type: LOG_IN });
    }
  };

  prevLoginCheck();

  const [login, { error }] = useMutation(LOGIN_USER);

  // const [emailInput, setEmailInput] = useState("");
  // const [passwordInput, setPasswordInput] = useState("");
  // const userInput = {
  //     email: emailInput,
  //     password: passwordInput,
  // };

  // submit form
  const handleFormSubmit = async ({ values }) => {
    try {
      const { data } = await login({
        variables: { ...values },
      });
      await Auth.login(data.login.token);
      dispatch({ type: LOG_IN });
    } catch (e) {
      console.error(e);
      // clear form values
      // setEmailInput("");
      // setPasswordInput("");
    }
  };

return (
    <SafeAreaView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
            <Text>Login</Text>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    handleFormSubmit({ values });
                }}
            >
                {(props) => (
                    <View> 
                        <TextInput
                            name='email'
                            id='email'
                            textContentType='emailAddress'
                            autoCapitalize='none'
                            placeholder='Email Address'
                            onChangeText={props.handleChange('email')}
                            value={props.values.email}
                        />
                        <TextInput
                            name='password'
                            id='password'
                            placeholder='Password'
                            secureTextEntry={true}
                            onChangeText={props.handleChange('password')}
                            value={props.values.password}
                        />
                        <Button title='submit' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
        </TouchableWithoutFeedback>
    </SafeAreaView>
)
};

// const Login = ({ route, navigation }) => {

//     return (
//         <SafeAreaView>
//             <StatusBar style="auto" />
//             <Text> Sign in</Text>
//             <View>
//                 <TextInput
//                     name="email"
//                     placeholder="Email"
//                     onChangeText={(text) => setEmailInput(text)}
//                     defaultValue={emailInput}
//                 />
//                 <TextInput
//                     name="password"
//                     secureTextEntry={true}
//                     placeholder="Password"
//                     onChangeText={(text) => setPasswordInput(text)}
//                     defaultValue={passwordInput}
//                 />
//                 <Button title="Submit" onPress={() => handleFormSubmit()} />
//                 <Button title="Logout" onPress={() => logoutUser()} />
//             </View>
//             <View>
//                 {/* This Link will need to hook up to the sign up page */}
//                 <Text>
//                     Need to create an account? Head to our{" "}
//                     <Link style={styles.linkText} to="/Signup">
//                         signup page
//           </Link>
//                 </Text>
//             </View>
//         </SafeAreaView>
//     );
// };

// const styles = StyleSheet.create({
//     linkText: {
//         color: "blue",
//     },
// });
// export default Login;
