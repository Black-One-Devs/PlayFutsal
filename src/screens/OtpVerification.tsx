"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  Alert,
} from "react-native"
import Button from "../components/authentication/Button"
import { wp, hp, fontSize } from "../../responsive/responsive"

interface OtpVerificationProps {
  phoneNumber: string
  onVerificationComplete: (code: string) => void
  onResendCode: () => void
  onGoBack: () => void
}

const OtpVerification: React.FC<OtpVerificationProps> = ({
  phoneNumber,
  onVerificationComplete,
  onResendCode,
  onGoBack,
}) => {
  const [otp, setOtp] = useState("")
  const [timer, setTimer] = useState(30)
  const [isResendActive, setIsResendActive] = useState(false)
  const inputRef = useRef<TextInput>(null)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)
    } else {
      setIsResendActive(true)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [timer])

  const handleOtpChange = (value: string) => {
    // Only allow numbers and limit to 6 digits
    const numericValue = value.replace(/[^0-9]/g, '')
    if (numericValue.length <= 6) {
      setOtp(numericValue)
    }
  }

  const handleResendCode = () => {
    if (isResendActive) {
      onResendCode()
      setTimer(30)
      setIsResendActive(false)
    }
  }

  const handleVerify = () => {
    if (otp.length === 6) {
      onVerificationComplete(otp)
    } else {
      Alert.alert("Invalid OTP", "Please enter a valid 6-digit OTP code")
    }
  }

  const renderOtpBoxes = () => {
    const boxes = []
    for (let i = 0; i < 6; i++) {
      boxes.push(
        <View
          key={i}
          style={[
            styles.otpBox,
            otp[i] ? styles.otpBoxFilled : null
          ]}
        >
          <Text style={styles.otpText}>{otp[i] || ''}</Text>
        </View>
      )
    }
    return boxes
  }

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
        keyboardVerticalOffset={Platform.OS === "ios" ? hp(10) : 0}
      >
        <View style={styles.content}>
          <Text style={styles.title}>Verification Code</Text>
          <Text style={styles.subtitle}>
            We have sent the verification code to{"\n"}
            {phoneNumber}
          </Text>

          <View style={styles.otpContainer}>
            {renderOtpBoxes()}
            <TextInput
              ref={inputRef}
              style={styles.hiddenInput}
              value={otp}
              onChangeText={handleOtpChange}
              keyboardType="numeric"
              maxLength={6}
              autoFocus
              selectionColor={'black'}
            />
          </View>

          <Button title="Verify" handleContinue={handleVerify} />

          <View style={styles.resendContainer}>
            <Text style={styles.resendText}>Didn't receive the code? </Text>
            <TouchableOpacity onPress={handleResendCode} disabled={!isResendActive}>
              <Text style={[styles.resendButton, !isResendActive && styles.resendButtonDisabled]}>
                {isResendActive ? "Resend" : `Resend in ${timer}s`}
              </Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity onPress={onGoBack} style={styles.backButton}>
            <Text style={styles.backButtonText}>Change Phone Number</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
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
  content: {
    flex: 1,
    padding: wp(20),
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: fontSize(24),
    marginBottom: hp(10),
    textAlign: "center",
    fontFamily: 'exo2Bold'
  },
  subtitle: {
    fontSize: fontSize(16),
    color: "#666",
    marginBottom: hp(40),
    textAlign: "center",
    fontFamily: 'exo2SemiBold'
  },
  otpContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: hp(40),
    position: 'relative',
  },
  otpBox: {
    width: wp(45),
    height: hp(55),
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: wp(8),
    justifyContent: "center",
    alignItems: "center",
  },
  otpBoxFilled: {
    borderColor: "#3498db",
    backgroundColor: "#f0f8ff",
  },
  otpText: {
    fontSize: fontSize(20),
    fontFamily: 'exo2Bold',
    color: "#0F172A",
  },
  hiddenInput: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0,
  },
  resendContainer: {
    flexDirection: "row",
    marginTop: hp(20),
    alignItems: "center",
  },
  resendText: {
    color: "#666",
    fontFamily: 'exo2Regular'
  },
  resendButton: {
    color: "#3498db",
    fontFamily: 'exo2Bold'
  },
  resendButtonDisabled: {
    color: "#999",
  },
  backButton: {
    marginTop: hp(20),
    padding: hp(10),
  },
  backButtonText: {
    color: "#3498db",
    fontFamily: 'exo2Regular'
  },
})

export default OtpVerification
