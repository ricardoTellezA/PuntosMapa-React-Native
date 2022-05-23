import React from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'

const Input = ({title, ...rest}) => {
  return (
    <View style={styles.wrapper}>
      <Text>{title}</Text>
      <TextInput {...rest} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    wrapper: {
        height:40,
    }
})