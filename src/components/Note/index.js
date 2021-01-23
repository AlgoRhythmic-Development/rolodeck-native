import React from 'react';
import { Text, View, Pressable, TextInput } from 'react-native';
import { useQuery } from '@apollo/client';
import { QUERY_NOTE } from '../../utils/mutations';

const Note = () => {
  const { data } = useQuery(QUERY_NOTE);
  const note = data?.note || '';

  const [editModeBool, setEditModeBool] = useState(false);
  const [value, onChangeText] = useState(note);

  return (
    <>
      {editModeBool ? (
        <View>
          <Pressable onClick={setEditModeBool(true)}>
            <Text>{note}</Text>
          </Pressable>
        </View>
      ) : (
        <View>
          <TextInput
            name="note"
            id="note"
            onChangeText={(text) => {
              onChangeText(text);
            }}
            value={value}
          />
          <Pressable>
            <Text>Done!</Text>
          </Pressable>
        </View>
      )}
    </>
  );
};

export default Note;
