import React, { useState } from "react";
import { Button, SafeAreaView } from "react-native";
// component imports
import EditCardModal from "../EditCardModal";

const EditCardButton = ({ cardData }) => {
  const [show, setShow] = useState(false);

  return (
    <SafeAreaView>
      <Button title="Edit" onPress={() => setShow(true)} />
      <EditCardModal show={show} setShow={setShow} cardData={cardData} />
    </SafeAreaView>
  );
};

export default EditCardButton;
