import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'
import * as SplashScreen from "expo-splash-screen";
import PhoneAuth from './src/screens/PhoneAuth';

SplashScreen.preventAutoHideAsync();


const App = () => {
    const [loaded, error] = useFonts({
        exo2Regular: require("./assets/fonts/Exo2-Regular.ttf"),
        exo2SemiBold: require("./assets/fonts/Exo2-SemiBold.ttf"),
        exo2Bold: require("./assets/fonts/Exo2-Bold.ttf"),

    });
    useEffect(() => {
        if (loaded || error) {
            setTimeout(async () => {
                await SplashScreen.hideAsync();
            }, 2000);
        }
    }, [loaded, error]);

    if (!loaded && !error) {
        return null;
    }
    return (
        <PhoneAuth />
    )
}

export default App

