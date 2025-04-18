import { StyleSheet, Text, TextInput, View, KeyboardTypeOptions } from 'react-native'
import React from 'react'
import { wp, hp, fontSize } from '../../../responsive/responsive'

interface InputFieldProps {
    value: string;
    onChangeText: (text: string) => void;
    keyboardType?: KeyboardTypeOptions;
}

const InputField = ({ value, onChangeText, keyboardType = "phone-pad" }: InputFieldProps) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.countryCodeContainer}>
                <Text style={styles.countryCode}>+977</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Enter your phone number"
                keyboardType={keyboardType}
                value={value}
                onChangeText={onChangeText}
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