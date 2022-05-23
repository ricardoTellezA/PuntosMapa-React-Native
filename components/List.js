import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Button,
  Dimensions,
} from "react-native";
import React from "react";

const List = ({ puntos, closeModal }) => {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={puntos.map((x) => x.name)}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text>{item}</Text>
            </View>
          )}
          keyExtractor={(item) => item}
        />
        <View style={styles.btnContainer}>
          <Button onPress={closeModal} title="Cerrar" />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get("window").height - 250,
  },

  item: {
    borderBottomWidth: 1,
    borderColor: "#ccc",
    height: 50,
    justifyContent: "center",
    padding: 15,
  },
});
export default List;
