import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  SafeAreaView,
} from "react-native";
// component imports
import Card from "../Card";

// the CardModal accepts props for handling visibility,
// an "isHome" boolean prop which will be passed to the Card child component,
// and a cardData prop which is the card object.
const CardModal = ({ show, setShow, isHome, cardData }) => {
  //   Define state and function to change modal visibility
  //   with the following code in parent component:

  //   const [show, setShow] = useState(false);

  //   You'll need to pass in the status message (either "Success!"
  //   or a message indicating an error)
  //   from the parent as a "status" prop:
  //   const [modalStatus, setModalStatus] = useState("Success!");

  //   You can also pass the modal a "data" prop with any other
  //   information or data you want displayed beneath the status message.
  //   This may need tweaking down the road but I thought it may be useful
  //   for displaying cards, search results etc.
  //   const [modalData, setModalData] = useState({});

  //   See Home screen for usage example
  return (
    <View style={styles.centeredView}>
      <Modal animationType="slide" transparent={true} visible={show}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Card isHome={isHome} cardData={cardData} />
            <TouchableHighlight
              style={{ ...styles.closeBtn }}
              onPress={() => {
                setShow(!show);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
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
    marginVertical: 220,
    marginHorizontal: 5,
    borderRadius: 20,
    paddingTop: 15,
    paddingBottom: 10,
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
  closeBtn: {
    marginTop: 0,
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

export default CardModal;
