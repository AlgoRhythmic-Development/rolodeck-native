import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
// component imports
import EditCardForm from "../EditCardForm";

const EditCardModal = ({ show, setShow, cardData }) => {
  //  Define state and function to change modal visibility
  //  with the following code in parent component:
  //  const [show, setShow] = useState(false);

  //  pass in a card object through the cardData prop

  //  See Home screen for usage example
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={show}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.title}>Editing Card</Text>
            <EditCardForm cardData={cardData} />
            <TouchableHighlight
              style={{ ...styles.closeBtn }}
              onPress={() => {
                setShow(!show);
              }}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    width: "98%",
    margin: 5,
    backgroundColor: "#2EB67D",
    borderRadius: 20,
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 10,
  },
  textStyle: {
    color: "white",
    textAlign: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    fontSize: 20,
  },
  title: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  data: {
    color: "white",
    fontSize: 25,
    fontWeight: "normal",
    marginBottom: 35,
    textAlign: "center",
  },
  closeBtn: {
    backgroundColor: "#FF0000",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

export default EditCardModal;
