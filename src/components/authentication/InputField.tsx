import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { wp, hp, fontSize } from '../../../responsive/responsive'

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
        borderRadius: wp(8),
        marginVertical: hp(20),
        height: hp(50),
    },
    countryCodeContainer: {
        width: wp(80),
        justifyContent: "center",
        alignItems: "center",
        borderRightWidth: 1,
        borderRightColor: "#CBD5E1",
    },
    countryCode: {
        fontSize: fontSize(16),
        color: "#0F172A",
        fontFamily: 'exo2Regular'
    },
    input: {
        flex: 1,
        paddingHorizontal: wp(15),
        fontSize: fontSize(16),
        color: "#0F172A",
        fontFamily: 'exo2Regular'
    },

})