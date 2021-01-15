import React from "react";
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableHighlight,
  SafeAreaView,
  View,
} from "react-native";

const StatusModal = ({ show, setShow, status, data }) => {
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
    <SafeAreaView style={styles.centeredView}>
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
            <Text style={styles.status}>{status}</Text>
            <Text style={styles.data}>{data}</Text>
            <TouchableHighlight
              style={{ ...styles.openButton }}
              onPress={() => {
                setShow(!show);
              }}
            >
              <Text style={styles.textStyle}>Close</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    flex: 1,
    marginTop: 50,
    marginBottom: 17,
    backgroundColor: "#2EB67D",
    borderRadius: 20,
    paddingTop: 15,
    paddingBottom: 10,
    paddingHorizontal: 90,
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
  status: {
    color: "white",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 35,
    textAlign: "center",
  },
  data: {
    color: "white",
    fontSize: 25,
    fontWeight: "normal",
    marginBottom: 35,
    textAlign: "center",
  },
  openButton: {
    backgroundColor: "#2196F3",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
});

export default StatusModal;
