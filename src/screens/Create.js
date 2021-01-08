import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, Keyboard, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import CardForm from "../components/CardForm";

const Create = ({route, navigation}) => {

    // We'll add this in at a later time.
    // redirect to my cards page if username is the logged-in user's
    // if (Auth.loggedIn()) {
    //     return <Redirect to="/cards" />;
    // }

    return (
        <SafeAreaView>
            <Text>Create a Business Card</Text> 
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <CardForm />
                </View>
            </TouchableWithoutFeedback>   
        </SafeAreaView>
    )   
};

export default Create