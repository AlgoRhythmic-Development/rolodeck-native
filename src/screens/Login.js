import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Link } from '@react-navigation/native';

const Login = ({route, navigation}) => {

    // We'll add this in at a later time.
    // const [formState, setFormState] = useState({ email: "", password: "" });

    // const [login, { error }] = useMutation(LOGIN_USER);
  
    // // update state based on form input changes
    // const handleChange = (event) => {
    //   const { name, value } = event.target;
  
    //   setFormState({
    //     ...formState,
    //     [name]: value,
    //   });
    // };
  
    // // submit form
    // const handleFormSubmit = async (event) => {
    //   event.preventDefault();
  
    //   try {
    //     const { data } = await login({
    //       variables: { ...formState },
    //     });
  
    //     Auth.login(data.login.token);
    //   } catch (e) {
    //     console.error(e);
    //   }
  
    //   // clear form values
    //   setFormState({
    //     email: "",
    //     password: "",
    //   });
    // };

    return (
        <View>
            <StatusBar style="auto" />
            <Text> Sign in</Text>
            <View>
                <TextInput placeholder="Email" />
                <TextInput secureTextEntry={true} placeholder="Password" />
                <Button 
                    title="Submit" 
                    onPress={() => Alert.alert("Under construction")} 
                />
            </View>
            <View>
                {/* This Link will need to hook up to the sign up page */}
                <Text>Need to create an account? Head to our <Link style={styles.linkText} to= "/Signup">signup page</Link></Text>
            </View>
        </View>
    )   
};

const styles = StyleSheet.create({
    linkText :{
        color: 'blue'
    }
})
export default Login