import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { memo } from 'react'
import { wp, hp, fontSize } from '../../../responsive/responsive'

// Define props interface for type safety
interface ButtonProps {
    title: string;
    handleContinue: () => void;
}

// Using React.memo to create a pure component that only re-renders when props change
const Button = memo(({ title, handleContinue }: ButtonProps) => {
    return (
        <TouchableOpacity style={styles.continueButton} onPress={handleContinue}>
            <Text style={styles.continueButtonText}>{title}</Text>
        </TouchableOpacity>
    )
})

export default Button

const styles = StyleSheet.create({
    continueButton: {
        backgroundColor: "#0F172A",
        borderRadius: wp(8),
        height: hp(50),
        justifyContent: "center",
        alignItems: "center",
        marginTop: hp(20),
        width:'100%'
    },
    continueButtonText: {
        color: "#FFFFFF",
        fontSize: fontSize(16),
        fontFamily: 'exo2Bold'
    },
})



