"use client"

import { useState, useEffect } from "react"
import {
    StyleSheet,
    Text,
    View,
    KeyboardAvoidingView,
    Platform,
    Keyboard,
} from "react-native"
import Button from "../components/authentication/Button"
import InputField from "../components/authentication/InputField"
import { SafeAreaView } from "react-native-safe-area-context"
import { wp, hp, fontSize } from "../../responsive/responsive"

interface PhoneAuthProps {
    handleContinue: (phone: string) => void;
}

const PhoneAuth = ({ handleContinue }: PhoneAuthProps) => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false)
    const [phoneNumber, setPhoneNumber] = useState("")

    const handlePhoneSubmit = () => {
        Keyboard.dismiss()
        handleContinue(phoneNumber)
    }

    // Add keyboard listeners
    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true)
            }
        )
        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false)
            }
        )

        return () => {
            keyboardDidShowListener.remove()
            keyboardDidHideListener.remove()
        }
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.keyboardAvoidingView}
                keyboardVerticalOffset={Platform.OS === "ios" ? hp(10) : 0}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Let's get you started.</Text>
                        <Text style={styles.subtitle}>Enter your phone number to continue.</Text>
                    </View>
                    <InputField
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                    />

                    <Button
                        title='Continue'
                        handleContinue={handlePhoneSubmit}
                    />

                </View>
            </KeyboardAvoidingView>

            <View style={styles.footerContainer}>
                <Text style={styles.footerText}>
                    This site is protected by reCAPTCHA and the{"\n"}
                    Google <Text style={styles.linkText}>Privacy Policy</Text> and{" "}
                    <Text style={styles.linkText}>Terms of Service</Text> apply.
                </Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: wp(20),
        justifyContent: "flex-start",
        marginTop: hp(60)
    },
    headerContainer: {
        marginBottom: hp(20),
    },
    title: {
        fontSize: fontSize(24),
        color: "#0F172A",
        marginBottom: hp(8),
        fontFamily: 'exo2Bold'
    },
    subtitle: {
        fontSize: fontSize(16),
        color: "#334155",
        fontFamily: 'exo2SemiBold'
    },
    footerContainer: {
        marginBottom: hp(20),
    },
    footerText: {
        fontSize: fontSize(12),
        color: "#64748B",
        textAlign: "center",
        lineHeight: hp(18),
    },
    linkText: {
        color: "#64748B",
        textDecorationLine: "underline",
    },
})

export default PhoneAuth
