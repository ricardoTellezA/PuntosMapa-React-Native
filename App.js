import React, { useState } from "react";
import { StyleSheet, View,  Button } from "react-native";
import { Map, Modal, Input } from "./components";
import List from "./components/List";
import Panel from "./components/Panel";

export default function App() {
  const [puntos, setPuntos] = useState([]);
  const [nombre, setNombre] = useState("");
  const [puntoTemp, setPuntoTemp] = useState({});
  const [visibilityFilter, setVisibilityFilter] = useState("new_punto"); // new_punto, all_puntos
  const [visibility, setVisibility] = useState(false);
  // const [pintsFilter, setPintsFilter] = useState(false); 

  const handleOnpress = ({ nativeEvent }) => {
    setVisibilityFilter("new_punto");
    setPuntoTemp(nativeEvent.coordinate);
    setVisibility(true);

    
  };
  const onChangeText = (text) => {
    setNombre(text);
  };

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre };
    setPuntos(puntos.concat(newPunto));
    setVisibility(false);
    setNombre("");
  };

  const handleLista = () => {
    setVisibilityFilter("all_puntos");
    setVisibility(true);
  };

  // const togglePointsFilter = () => setPintsFilter(!pintsFilter);

  return (
    <View style={styles.container}>
      <Map handleOnpress={handleOnpress} puntos={puntos}  />
      <Modal visibility={visibility}>
        {visibilityFilter === "new_punto" ? (
          <View style={styles.form}> 
            <Input
             style={styles.input}
              title="nombre"
              placeholder="Nombre"
              onChangeText={onChangeText}
            />
            <Button style={styles.btn} title="Guardar" onPress={handleSubmit} />
          </View>
        ) : (
         <List puntos={puntos} closeModal={() => setVisibility(false)}/>
        )}
      </Modal>
      <Panel onPressLeft={handleLista} textLeft={"Lista"}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  btn: {
    marginTop: 50,
    
  },
  textBtn: {
    color: "#fff",
    fontWeight: "bold",
  },

  input: {
    marginBottom: 20,
    
  },

  form: {
    padding: 15,
  },
});
