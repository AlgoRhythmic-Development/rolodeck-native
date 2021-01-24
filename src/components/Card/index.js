import React, { useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View,
  TextInput,
  Pressable,
} from 'react-native';
import FlipCard from 'react-native-flip-card';
import QrCode from 'react-native-qrcode-svg';
// component imports
import EditCardButton from '../EditCardButton';
import { useMutation } from '@apollo/client';
import { UPDATE_CARD } from '../../utils/mutations';

// import Notes from '../Notes';

const Card = ({ isHome, cardInfo }) => {
  // used to update notes
  const [addNote] = useMutation(UPDATE_CARD);
  // used to set the value for inputs
  const [value, onChangeText] = useState(cardInfo.notes);
  // used to toggle edit mode for the note
  const [noteEditModeBool, setNoteEditModeBool] = useState(false);

  return (
    <FlipCard
      friction={6}
      perspective={1000}
      flipHorizontal={true}
      flipVertical={false}
      flip={false}
      clickable={true}
    >
      {/* FRONT SIDE */}
      <View style={styles.card}>
        {/* render edit button */}
        {isHome && <EditCardButton cardData={cardInfo} />}

        {/* render card attributes from props, some will only render if they exist */}
        {cardInfo.companyName ? (
          <Text style={styles.title}>{cardInfo.companyName}</Text>
        ) : undefined}
        {cardInfo.tagline ? (
          <Text style={styles.item}>{cardInfo.tagline}</Text>
        ) : undefined}
        <Text style={styles.item}>{cardInfo.name}</Text>
        <Text style={styles.item}>{cardInfo.jobTitle}</Text>
        {cardInfo.website ? (
          <Text style={styles.item}>{cardInfo.website}</Text>
        ) : undefined}
        <Text style={styles.item}>{cardInfo.phone}</Text>
        <Text style={styles.item}>{cardInfo.email}</Text>
      </View>

      {/* BACK SIDE */}
      <View style={styles.back}>
        {/* render qr code */}
        <QrCode value="some random string" />

        {/* if notes already exist */}
        {cardInfo.notes ? (
          <View>
            {/* if note edit mode is pressed then render the note in a text input */}
            {noteEditModeBool ? (
              <View>
                <TextInput
                  name="note"
                  id="note"
                  onChangeText={(text) => {
                    onChangeText(text);
                  }}
                  value={cardInfo.note}
                />
                {/* render a button for user to click to save updates to note */}
                <Pressable
                  onClick={(text) => {
                    addNote({
                      variables: { _id: cardInfo._id, input: { notes: text } },
                    });
                    setNoteEditModeBool(false);
                  }}
                >
                  <Text>Done!</Text>
                </Pressable>
              </View>
            ) : (
              <Pressable onClick={setNoteEditModeBool(true)}>
                {/* if note edit mode has not been selected then render a button with the note as the content*/}
                <Text style={styles.item}>{cardInfo.notes}</Text>
              </Pressable>
            )}
          </View>
        ) : (
          <View>
            {/* if notes don't already exist render a text input and a button to save user's note */}
            <TextInput
              name="note"
              id="note"
              onChangeText={(text) => {
                onChangeText(text);
              }}
              value={value}
            />
            <Pressable
              onClick={(text) => {
                addNote({
                  variables: { _id: cardInfo._id, input: { notes: text } },
                });
              }}
            >
              <Text>Done!</Text>
            </Pressable>
          </View>
        )}
      </View>
    </FlipCard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  card: {
    backgroundColor: 'pink',
    margin: 20,
    borderRadius: 20,
  },
  back: {
    margin: 20,
    borderRadius: 20,
    paddingVertical: 175,
    backgroundColor: 'darkcyan',
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    textAlign: 'center',
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
    marginTop: 20,
  },
});

export default Card;
