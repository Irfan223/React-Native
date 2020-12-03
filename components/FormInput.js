import React from 'react'
import { Input } from 'react-native-elements'
import { StyleSheet, View } from 'react-native'

const FormInput = ({
  iconName,
  iconColor,
  returnKeyType,
  keyboardType,
  name,
  placeholder,
  ...rest
}) => (
    <View style={styles.inputContainer}>
      <Input
        {...rest}
        placeholderTextColor='grey'
        keyboardType={keyboardType}
        inputContainerStyle={{borderBottomWidth:0}}
        name={name}
        placeholder={placeholder}
        style={styles.input}
      />
    </View>
  )

const styles = StyleSheet.create({
  inputContainer: {
    margin: 0
  },
  input: {
    paddingLeft: 20,
    height: 45,
    backgroundColor: 'white',
    borderRadius: 30,
  }
})

export default FormInput
