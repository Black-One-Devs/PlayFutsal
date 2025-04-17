import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { wp, hp, fontSize } from '../../../responsive/responsive'

const Button = ({ title, handleContinue }) => {
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
        borderRadius: wp(8),
        height: hp(50),
        justifyContent: "center",
        alignItems: "center",
        marginTop: hp(20),
    },
    continueButtonText: {
        color: "#FFFFFF",
        fontSize: fontSize(16),
        fontFamily: 'exo2Bold'
    },
})