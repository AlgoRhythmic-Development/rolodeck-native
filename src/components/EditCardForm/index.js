import React from "react";
import {
  Button,
  Keyboard,
  TextInput,
  Text,
  TouchableWithoutFeedback,
  TouchableHighlight,
  View,
  SafeAreaView,
  StyleSheet,
} from "react-native";
import { Formik } from "formik";
import AnimatedLoader from "react-native-animated-loader";
import { useMutation } from "@apollo/client";
import { QUERY_ME, QUERY_CARDS } from "../../utils/queries";
import { UPDATE_CARD } from "../../utils/mutations";

export default function EditCardform({ cardData }) {
  const [updateCard, { error, loading }] = useMutation(UPDATE_CARD, {
    update(cache, { data: { updateCard } }) {
      //   try {
      //     //could potentially not exist yet, so wrap in a try...catch
      //     const { cards } = cache.readQuery({ query: QUERY_CARDS });
      //     cache.writeQuery({
      //       query: QUERY_CARDS,
      //       data: { cards: [updateCard, ...cards] },
      //     });
      //   } catch (e) {
      //     console.error(e);
      //   }
      try {
        //update me object's cache, appending new card to the end of the array
        const { me } = cache.readQuery({ query: QUERY_ME });
        cache.writeQuery({
          query: QUERY_ME,
          data: { me: { ...me, cards: [...me.cards] } },
        });
      } catch (e) {
        console.error(error);
      }
    },
  });

  // submit form
  const handleFormSubmit = async ({ values }) => {
    try {
      await updateCard({
        variables: { _id: cardData._id, input: values },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SafeAreaView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss()}>
        <View>
          {loading ? (
            <AnimatedLoader
              visible={true}
              source={require("../../assets/lottie/teal-spinner.json")}
              animationStyle={{
                width: 200,
                height: 200,
              }}
              speed={1}
            />
          ) : (
            <Formik
              initialValues={{
                companyName: cardData.companyName,
                tagline: cardData.tagline,
                name: cardData.name,
                jobTitle: cardData.jobTitle,
                website: cardData.website,
                phone: cardData.phone,
                email: cardData.email,
              }}
              onSubmit={(values, actions) => {
                handleFormSubmit({ values });
                // actions.resetForm();
              }}
            >
              {(props) => (
                // this one does close the keyboard but after every keystroke.
                <View style={styles.formContainer}>
                  <TextInput
                    style={styles.formInput}
                    name="companyName"
                    id="companyName"
                    placeholder="Enter company name"
                    onChangeText={props.handleChange("companyName")}
                    value={props.values.companyName}
                  />

                  <TextInput
                    style={styles.formInput}
                    name="tagline"
                    id="tagline"
                    placeholder="Enter tagline"
                    onChangeText={props.handleChange("tagline")}
                    value={props.values.tagline}
                  />

                  <TextInput
                    style={styles.formInput}
                    name="name"
                    id="name"
                    placeholder="Enter Full Name"
                    onChangeText={props.handleChange("name")}
                    value={props.values.name}
                  />

                  <TextInput
                    style={styles.formInput}
                    name="jobTitle"
                    id="jobTitle"
                    placeholder="Enter Job Title"
                    onChangeText={props.handleChange("jobTitle")}
                    value={props.values.jobTitle}
                  />

                  <TextInput
                    style={styles.formInput}
                    name="website"
                    id="website"
                    placeholder="Enter Website"
                    onChangeText={props.handleChange("website")}
                    value={props.values.website}
                  />

                  <TextInput
                    style={styles.formInput}
                    name="phone"
                    id="phone"
                    placeholder="Enter phone number"
                    keyboardType="numeric"
                    onChangeText={props.handleChange("phone")}
                    value={props.values.phone}
                  />
                  <TextInput
                    style={styles.formInput}
                    name="email"
                    id="email"
                    placeholder="Enter your email address"
                    onChangeText={props.handleChange("email")}
                    value={props.values.email}
                  />
                  <TouchableHighlight
                    style={{ ...styles.submitButton }}
                    onPress={props.handleSubmit}
                  >
                    <Text style={{ ...styles.submitButton }}>
                      Submit Changes
                    </Text>
                  </TouchableHighlight>
                </View>
              )}
            </Formik>
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    borderRadius: 20,
    backgroundColor: "white",
    marginBottom: 10,
    marginHorizontal: 5,
    paddingTop: 6,
  },
  formInput: {
    borderRadius: 20,
    backgroundColor: "#F6F6F6",
    borderColor: "#8D8D8D",
    margin: 3,
    paddingVertical: 10,
    paddingHorizontal: 40,
    fontSize: 25,
  },
  submitButton: {
    color: "white",
    fontSize: 20,
    alignItems: "center",
    backgroundColor: "#2196F3",
    borderRadius: 20,
    margin: 3,
    padding: 5,
    elevation: 2,
  },
});
