import React from 'react';
// import ContactForm from '../components/ContactForm';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { Formik } from 'formik';

 // this form will need styles from a global styles sheet.
 export default function Contact() {

    // this is where we'll need to pass the login data to the email handler. 
    return(
        <View>
            <Text>Contact Us</Text>
            <Text>Fill out the form below to contact us. We'd love to hear your questions, feedback, and ideas. 
                After submiting this form, we will contact you as soon as possible. 
            </Text>
            <Formik
                initialValues={{ 
                    firstName: '', 
                    lastName: '', 
                    contactFormEmail: '', 
                    subject: '',
                    message: '' 
                }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    console.log(values);
                }}
            >
                {(props) => (
                    <View> 
  
                        <TextInput
                            name= 'firstName'
                            id='firstName'
                            placeholder='First Name'
                            onChangeText={props.handleChange('firstName')}
                            value={props.values.firstName} 
                        />  
  
                        <TextInput
                            name= 'lastName'
                            id='lastName'
                            placeholder='Last Name'
                            onChangeText={props.handleChange('lastName')}
                            value={props.values.lastName} 
                        />   

                        <TextInput
                            textContentType='emailAddress'
                            name= 'contactFormEmail'
                            id='contactFormEmail'
                            placeholder='Enter email'
                            onChangeText={props.handleChange('contactFormEmail')}
                            value={props.values.contactFormEmail} 
                        />   

                        <TextInput
                            name="subject"
                            id="subject"
                            placeholder='Enter a subject line'
                            onChangeText={props.handleChange('subject')}
                            value={props.values.subject} 
                        />   

                        <TextInput
                            name="message"
                            id="message"
                            placeholder='Message'
                            multiline={true}
                            numberOfLines={4}
                            onChangeText={props.handleChange('message')}
                            value={props.values.message} 
                        />   
  
                        <Button title='submit' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
  }