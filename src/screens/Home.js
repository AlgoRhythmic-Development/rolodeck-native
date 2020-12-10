import { StatusBar } from "expo-status-bar";
import React from "react";
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const Home = ({route, navigation}) => {

    // We'll add this in at a later time.
    // redirect to my cards page if username is the logged-in user's
    // if (Auth.loggedIn()) {
    //     return <Redirect to="/cards" />;
    // }

    return (
        <View>
            <StatusBar style="auto" />
            <Text>Welcome to RoloDeck!</Text>
            <Text>Join a community of business professionals.</Text>
            <Text>Log in or sign-up to get started!</Text>
            <Button 
                title="Get Started" 
                onPress={() => Alert.alert("Under construction")}
                // this will go to the log in page
                // onPress={() => navigation.navigate("Login", { name: "Dummy" })}
            />
        </View>
    )   
};

export default Home