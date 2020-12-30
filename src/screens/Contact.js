import React from 'react';
// import ContactForm from '../components/ContactForm';
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native';

// const Contact = () => {

//     return (
//         <View>
//             <Text>Contact Us</Text>
//             <Text>Fill out the form below to contact us. We'd love to hear your questions, feedback, and ideas. After submiting this form, we will contact you as soon as possible.
//                 </Text>
//             <View>
//                 {/* <ContactForm></ContactForm> */}
//             </View>

//         </View >
//     )
// };

// export default Contact;
 // this form will need styles from a global styles sheet. Change name of function to Login
 export default function Contact() {

    // this is where we'll need to pass the login data to the back end.
    return(
        <View>
            <Text>Login</Text>
            <Formik
                initialValues={{ email: '', password: '' }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    console.log(values);
                }}
            >
                {(props) => (
                    <View> 
  
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