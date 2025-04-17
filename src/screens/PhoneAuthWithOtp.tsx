"use client"

import type React from "react"
import { useState, useCallback } from "react"
import { View, StyleSheet, Alert } from "react-native"
import PhoneAuth from "./PhoneAuth"
import OtpVerification from "./OtpVerification"

const PhoneAuthWithOtp: React.FC<{ navigation: any }> = ({ navigation }) => {
    const [currentScreen, setCurrentScreen] = useState<"phone" | "otp">("phone")
    const [phoneNumber, setPhoneNumber] = useState("")

    const handleContinue = useCallback((phone: string) => {
        // Here you would typically call your authentication service to send the OTP
        // For example: auth.sendOtp(phone)
        setPhoneNumber(phone)
        setCurrentScreen("otp")

        // Mock implementation
        console.log(`Sending OTP to ${phone}`)
    }, [])

    const handleVerificationComplete = useCallback((code: string) => {
        // Here you would verify the OTP with your authentication service
        // For example: auth.verifyOtp(phoneNumber, code)

        // Mock implementation
        console.log(`Verifying OTP: ${code} for phone: ${phoneNumber}`)
        Alert.alert("Success", "Phone number verified successfully!")
        // Navigate to the next screen or set authenticated state
    }, [phoneNumber])

    const handleResendCode = useCallback(() => {
        // Resend OTP logic
        console.log(`Resending OTP to ${phoneNumber}`)
        Alert.alert("OTP Sent", `A new verification code has been sent to ${phoneNumber}`)
    }, [phoneNumber])

    const handleGoBack = useCallback(() => {
        setCurrentScreen("phone")
    }, [])

    return (
        <View style={styles.container}>
            {currentScreen === "phone" ? (
                <PhoneAuth handleContinue={handleContinue} />
            ) : (
                <OtpVerification
                    phoneNumber={phoneNumber}
                    onVerificationComplete={handleVerificationComplete}
                    onResendCode={handleResendCode}
                    onGoBack={handleGoBack}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
})

export default PhoneAuthWithOtp
