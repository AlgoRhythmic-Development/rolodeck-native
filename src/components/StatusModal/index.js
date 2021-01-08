import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";

const StatusModal = ({ show, setShow, status, data }) => {
  //   Define state and function to change modal visibility
  //   with the following code in parent component:

  //   const [show, setShow] = useState(false);

  //   You'll also need to pass in the status message (either "Success!"
  //   or a message indicating an error)
  //   from the parent as a "status" prop:
  //   const [modalStatus, setModalStatus] = useState("Success!");

  //   Finally, you can also pass the modal a "data" prop with any other
  //   information or data you want displayed beneath the status message.
  //   This may need tweaking down the road but I thought it may be useful
  //   for displaying cards, search results etc.
  //   const [modalData, setModalData] = useState({});

  //   See Home screen for usage example
  console.log("modal data:");
  console.log(data);
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={show}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>{status}</Text>
            <Text style={styles.modalText}>{data}</Text>
            <TouchableHighlight
              style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
              onPress={() => {
                setShow(!show);
              }}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
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
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "#2EB67D",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    // fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    color: "white",
    fontSize: 50,
    fontWeight: "bold",
    marginVertical: 100,
    textAlign: "center",
  },
});

export default StatusModal;
