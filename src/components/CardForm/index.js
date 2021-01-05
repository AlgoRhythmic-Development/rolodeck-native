import React from "react";
import { Alert, Button, StatusBar, Text, TextInput, View } from "react-native";
import { Formik } from 'formik';

// const CardForm = () => {
    // This is stuff that we will need to add in/fix later.
    // const [formState, setFormState] = useState({
    //     // logoUrl: "",
    //     companyName: "",
    //     tagline: "",
    //     name: "",
    //     jobTitle: "",
    //     website: "",
    //     phone: "",
    //     email: "",
    //   });
    
    //   const [errorMessage, setErrorMessage] = useState("");
    
    //   const [addCard, { error }] = useMutation(ADD_CARD, {
    //     update(cache, { data: { addCard } }) {
    //       try {
    //         //could potentially not exist yet, so warap in a try...catch
    //         const { cards } = cache.readQuery({ query: QUERY_CARDS });
    //         cache.writeQuery({
    //           query: QUERY_CARDS,
    //           data: { cards: [addCard, ...cards] },
    //         });
    //       } catch (e) {
    //         console.error(e);
    //       }
    
    //       //update me object's cache, appending new card to the end of the array
    //       const { me } = cache.readQuery({ query: QUERY_ME });
    //       cache.writeQuery({
    //         query: QUERY_ME,
    //         data: { me: { ...me, cards: [...me.cards, addCard] } },
    //       });
    //     },
    //   });
    
    //   const handleChange = (event) => {
    //     const { name, value } = event.target;
    
    //     setFormState({
    //       ...formState,
    //       [name]: value,
    //     });
    //   };
    
    //   // use State to handle SuccessModal
    //   // set initial show state to false
    //   const [show, setShow] = useState(false);
    
    //   const isValidPhoneInput = (text) => {
    //     const isValid = validatePhone(text);
    //     return isValid;
    //   };
    
    
    //   const isValidEmailInput = (text) => {
    //     const isValid = validateEmail(text);
    //     return isValid;
    //   };
    
    //   //handler for the card form
    //   const handleFormSubmit = async (event) => {
    //     event.preventDefault();
    
    //     const isValidPhone = isValidPhoneInput(formState.phone);
    //     const isValidEmail = isValidEmailInput(formState.email);
    //     const hasName = formState.name;
    //     const hasTitle = formState.jobTitle;
    
    //     try {
    //       //validate required fields
    //       if (!isValidEmail) {
    //         setErrorMessage("Please enter a valid email address.");
    //         return;
    //       } else if (!isValidPhone) {
    //         setErrorMessage("Please enter a valid phone number.");
    //         return;
    //       } else if (hasName.length < 3) {
    //         setErrorMessage("Please enter a full name.");
    //         return;
    //       } else if (hasTitle.length < 3) {
    //         setErrorMessage("Please enter a job title.");
    //         return;
    //       } else {
    //         setErrorMessage("");
    //       }
    
    //       //add card to database
    //       await addCard({
    //         variables: { ...formState },
    //       });
    
    //       // clear form value
    //       setFormState({
    //         // logoUrl: "",
    //         companyName: "",
    //         tagline: "",
    //         name: "",
    //         jobTitle: "",
    //         website: "",
    //         phone: "",
    //         email: "",
    //       });
    
    //       // display SuccessModal
    //       setShow(true);
    //     } catch (e) {
    //       console.error(e);
    //     }
    //   };


//     return (
//         <View>    
//             <StatusBar style="auto" />
//             <Text> Fill out the form below</Text>
//             <View>
//                 <TextInput placeholder="Company Name" />
//                 <TextInput placeholder="Company's Tagline" />
//                 <TextInput placeholder="Full Name" />
//                 <TextInput placeholder="Job Title" />
//                 <TextInput placeholder="Company Website" />
//                 <TextInput placeholder="Phone Number" />
//                 <TextInput placeholder="Email Address" />
//                 <Button 
//                     title="Submit" 
//                     onPress={() => Alert.alert("Under construction")} 
//                 />
//             </View>
//         </View>
//     )
// }

export default function Cardform() {

    // this is where we'll need to pass the login data to the back end.

    // edit this form to include formik info.
    return(
        <View>
            <Text>Fill out the form below</Text>
            <Formik
                initialValues={{ 
                    companyName: "",
                    tagline: "",
                    name: "",
                    jobTitle: "",
                    website: "",
                    phone: "",
                    email: "",
                }}

                onSubmit={(values, actions) => {
                    actions.resetForm();
                    console.log(values);
                }}
            >
                {(props) => (
                    <View> 
                        
                        <TextInput
                            placeholder='Enter company name'
                            onChangeText={props.handleChange('companyName')}
                            value={props.values.companyName} 
                        /> 

                        <TextInput
                            placeholder='Enter tagline'
                            onChangeText={props.handleChange('tagline')}
                            value={props.values.tagline} 
                        /> 

                        <TextInput
                            placeholder='Enter Full Name'
                            onChangeText={props.handleChange('name')}
                            value={props.values.name} 
                        /> 

                        <TextInput
                            placeholder='Enter Job Title'
                            onChangeText={props.handleChange('jobTitle')}
                            value={props.values.jobTitle} 
                        /> 

                        <TextInput
                            placeholder='Enter Website'
                            onChangeText={props.handleChange('website')}
                            value={props.values.website} 
                        /> 

                        <TextInput
                            placeholder='Enter phone number'
                            onChangeText={props.handleChange('phone')}
                            value={props.values.phone} 
                        /> 
                        <TextInput
                            placeholder='Enter your email address'
                            onChangeText={props.handleChange('email')}
                            value={props.values.email} 
                        />    
  
                        <Button title='submit' onPress={props.handleSubmit} />
                    </View>
                )}
            </Formik>
        </View>
    )
  }