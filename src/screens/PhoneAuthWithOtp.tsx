"use client"

import type React from "react"
import { useState, useCallback, useRef, useEffect } from "react"
import { View, StyleSheet, Alert, Animated } from "react-native"
import PhoneAuth from "./PhoneAuth"
import OtpVerification from "./OtpVerification"
import { wp, hp } from "../../responsive/responsive"

const PhoneAuthWithOtp = () => {
    const [currentScreen, setCurrentScreen] = useState<"phone" | "otp">("phone")
    const [phoneNumber, setPhoneNumber] = useState("")
    const slideAnim = useRef(new Animated.Value(0)).current
    const fadeAnim = useRef(new Animated.Value(1)).current

    const animateTransition = (toValue: number) => {
        Animated.parallel([
            Animated.timing(slideAnim, {
                toValue,
                duration: 300,
                useNativeDriver: true,
            }),
            Animated.timing(fadeAnim, {
                toValue: toValue === 0 ? 1 : 0,
                duration: 300,
                useNativeDriver: true,
            }),
        ]).start()
    }

    const handleContinue = useCallback((phone: string) => {
        setPhoneNumber(phone)
        animateTransition(1)
        setTimeout(() => {
            setCurrentScreen("otp")
            animateTransition(0)
        }, 300)
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
        animateTransition(1)
        setTimeout(() => {
            setCurrentScreen("phone")
            animateTransition(0)
        }, 300)
    }, [])

    return (
        <View style={styles.container}>
            <Animated.View
                style={[
                    styles.screenContainer,
                    {
                        transform: [{
                            translateX: slideAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -wp(10)]
                            })
                        }],
                        opacity: fadeAnim
                    }
                ]}
            >
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
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        overflow: 'hidden',
    },
    screenContainer: {
        flex: 1,
        width: '100%',
    },
})

export default PhoneAuthWithOtp
