import { Text, StyleSheet, View, Button } from 'react-native'
import React, { Component } from 'react'

export default function Panel({onPressLeft, textLeft}) {
  
    return (
      <View style={styles.panel}>
       <Button onPress={onPressLeft}  title={textLeft}/>
       <Button title='Mostrar/Ocultar'/>
      </View>
    )
  
}

const styles = StyleSheet.create({
  panel: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
  },

})