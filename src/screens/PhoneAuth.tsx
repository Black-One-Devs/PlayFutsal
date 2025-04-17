"use client"

import { useState, useEffect } from "react"
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    Keyboard,
} from "react-native"
import Button from "../components/authentication/Button"
import InputField from "../components/authentication/InputField"

const PhoneAuth = () => {
    const [isKeyboardVisible, setKeyboardVisible] = useState(false)

    const handleContinue = () => {
        // Handle phone authentication logic here
        Keyboard.dismiss()
        // console.log("Phone number submitted:", phoneNumber) //yeslai context ma hanu parxa
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
                keyboardVerticalOffset={Platform.OS === "ios" ? 10 : 0}
            >
                <View style={styles.contentContainer}>
                    <View style={styles.headerContainer}>
                        <Text style={styles.title}>Let's get you started.</Text>
                        <Text style={styles.subtitle}>Enter your phone number to continue.</Text>
                    </View>
                    <InputField />
                    <Button title='Continue' handleContinue={handleContinue} />
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
        paddingHorizontal: 20,
        justifyContent: "flex-start",
        paddingTop: 40,
    },
    headerContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        color: "#0F172A",
        marginBottom: 8,
        fontFamily: 'exo2Bold'
    },
    subtitle: {
        fontSize: 16,
        color: "#334155",
        fontFamily: 'exo2SemiBold'
    },
    footerContainer: {
        marginBottom: 20,
    },
    footerText: {
        fontSize: 12,
        color: "#64748B",
        textAlign: "center",
        lineHeight: 18,
    },
    linkText: {
        color: "#64748B",
        textDecorationLine: "underline",
    },
})

export default PhoneAuth
