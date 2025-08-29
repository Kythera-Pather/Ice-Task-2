import React, { useState } from "react";
import { View, Text, Button, Image, TouchableOpacity, Modal, FlatList, StyleSheet } from "react-native";

const ParisDemo = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const landmarks = [
    { id: "1", name: "Eiffel Tower" },
    { id: "2", name: "Louvre Museum" },
    { id: "3", name: "Notre Dame" },
  ];

  return (
    <View style={styles.container}>
      
      {/* Title */}
      <Text style={styles.title}>Paris Demo</Text>
      <Text>This app shows examples of UI components about Paris.</Text>

      {/* Image */}
      <Text>This is an Image componet. It displays pictures.</Text>
      <Image
        source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg" }}
        style={styles.image}
      />
      

      {/* FlatList */}
      <Text>This is a FlatList. It renders lists efficiently.</Text>
      <Text style={styles.sectionTitle}>Famous Paris Landmarks (FlatList):</Text>
      <FlatList
        data={landmarks}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />

      {/* TouchableOpacity */}
      <Text>This is a TouchableOpacity. It’s like a pressable container.</Text>
      <TouchableOpacity style={styles.touchable} onPress={() => alert("Bonjour from Paris the city of love!")}>
        <Text style={styles.touchText}>Say Hello</Text>
      </TouchableOpacity>
      

      {/* Modal */}
      <Text>This is a Modal component. It shows content in a popup.</Text>
      <Button title="Open Paris Info" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text>Paris is the capital of France, known as the City of Light.</Text>
            <Button title="Close" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      

      {/* Button */}
      <Text>This is a Button component. It performs an action when pressed.</Text>
      <Button title="Click Me" onPress={() => alert("Button pressed")} />
    </View>
  );
};

export default ParisDemo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  image: {
    width: 500,
    height: 500,
    marginVertical: 10,
  },
  sectionTitle: {
    marginTop: 10,
    fontWeight: "bold",
  },
  touchable: {
    backgroundColor: "#db425bff",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  touchText: {
    color: "white",
    fontWeight: "bold",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(42, 115, 211, 0.5)",
  },
  modalBox: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",


  },
});