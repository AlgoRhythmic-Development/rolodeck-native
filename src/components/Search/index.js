import React, { useState, useEffect } from "react";
import { Alert, Button, StatusBar, Text, TextInput, View, Modal } from "react-native";
import { useLazyQuery } from "@apollo/client";
import { QUERY_USER_CARDS } from "../../utils/queries.js";
import ResultsModal from "../SearchResultsModal";
import { Formik } from "formik";


const Search = ({ addCollectedCard, collectedCards }) => {
    const [searchCards, { data }] = useLazyQuery(QUERY_USER_CARDS);
    const initialResults = data?.userCards || [];

    let filteredResults = [];

    const [finalResults, setFinalResults] = useState(filteredResults);

    const filterResults = () => {
        filteredResults = [];

        for (let i = 0; i < initialResults.length; i++) {
            let isNewCard = true;

            for (let j = 0; j < collectedCards.length; j++) {
                if (initialResults[i]._id === collectedCards[j]._id) {
                    isNewCard = false;
                    break;
                } else {
                    continue;
                }
            }

            if (isNewCard === false) {
                continue;
            } else {
                filteredResults.push(initialResults[i]);
            }
        }

        setFinalResults(filteredResults);
    };

    useEffect(() => {
        filterResults();
    }, [data]);

    // use State to handle ResultsModal
    // set initial show state to false
    const [show, setShow] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        await searchCards({
            variables: { name: e.target.nameInput.value },
        });

        setShow(true);
    };

    return (
        <View>
            <ResultsModal
                show={show}
                setShow={setShow}
                results={finalResults}
                addCollectedCard={addCollectedCard}
            />

            <Formik
                initialValues={{
                    searchInput: '',
                }}
                onSubmit={(values, actions) => {
                    handleFormSubmit({ values });
                    // actions.resetForm();
                }}
            >
                {(props) => (
                    <View>
                        <TextInput
                        name='seearchInput'
                        id='searchInput'
                        placeholder='Who are you looking for?'
                        onChangeText={props.handleChange('searchInput')}
                        value={props.values.searchInput}
                        />
                    </View>
                )}
                <Button type="submit">
                    Search
                </Button>
            </Formik>
        </View>
    );
};

export default Search;