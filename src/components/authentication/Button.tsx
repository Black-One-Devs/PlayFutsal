import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Button = ({title,handleContinue}) => {
  return (
    <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
    <Text style={styles.continueButtonText}>{title}</Text>
</TouchableOpacity>
  )
}

export default Button

const styles = StyleSheet.create({
    continueButton: {
        backgroundColor: "#0F172A",
        borderRadius: 8,
        height: 50,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 20,
    },
    continueButtonText: {
        color: "#FFFFFF",
        fontSize: 16,
        fontFamily:'exo2Bold'
    },
})