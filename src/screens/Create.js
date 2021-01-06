import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import CardForm from "../components/CardForm";

const Create = ({route, navigation}) => {

    // We'll add this in at a later time.
    // redirect to my cards page if username is the logged-in user's
    // if (Auth.loggedIn()) {
    //     return <Redirect to="/cards" />;
    // }

    return (
        <View>
            <StatusBar style="auto" />
            <Text>Create a Business Card</Text> 
            <View>
                <CardForm />
            </View>   
        </View>
    )   
};

export default Create