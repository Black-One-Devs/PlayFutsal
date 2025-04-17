import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const InputField = () => {
    const [phoneNumber, setPhoneNumber] = useState("")
  return (
    <View style={styles.inputContainer}>
    <View style={styles.countryCodeContainer}>
        <Text style={styles.countryCode}>+977</Text>
    </View>
    <TextInput
        style={styles.input}
        placeholder="Enter your phone number"
        keyboardType="phone-pad"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        selectionColor={'black'}
    />
</View>
  )
}

export default InputField

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: "row",
        borderWidth: 1,
        borderColor: "#CBD5E1",
        borderRadius: 8,
        marginVertical: 20,
        height: 50,
    },
    countryCodeContainer: {
        width: 80,
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: 1,
        borderRightColor: "#CBD5E1",
    },
    countryCode: {
        fontSize: 16,
        color: "#0F172A",
        fontFamily:'exo2Regular'
    },
    input: {
        flex: 1,
        paddingHorizontal: 15,
        fontSize: 16,
        color: "#0F172A",
        fontFamily:'exo2Regular'
    },

})