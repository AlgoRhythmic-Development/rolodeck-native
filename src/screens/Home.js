import React from "react";
import { Alert, Button, StyleSheet, Text, View } from 'react-native';

const Home = () => {

    // We'll add this in at a later time.
    // redirect to my cards page if username is the logged-in user's
    // if (Auth.loggedIn()) {
    //     return <Redirect to="/cards" />;
    // }

    return (
        <View>
            <Text>Welcome to RoloDeck!</Text>
            <Text>Join a community of business professionals.</Text>
            <Text>Log in or sign-up to get started!</Text>
            <Button 
                title="Get Started" 
                color="#1B1B1B" 
                onPress={() => Alert.alert("this should take you to the login page")}
            />
        </View>
    )   
};

export default Home