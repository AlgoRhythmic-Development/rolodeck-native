import React from 'react';
// import ContactForm from '../components/ContactForm';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';

const Contact = () => {

    return (
        <View>
            <Text>Contact Us</Text>
            <Text>Fill out the form below to contact us. We'd love to hear your questions, feedback, and ideas. After submiting this form, we will contact you as soon as possible.
                </Text>
            <View>
                {/* <ContactForm></ContactForm> */}
                {/* <StatusBar style='auto' /> */}
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

                        <Button title='submit' onPress={props.handleSumbit} />
                        </View>
                    )}      
                    </Formik>
                </View>
            </View>

        </View >
    )
};

export default Contact;