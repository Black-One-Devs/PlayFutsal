
import React, { useEffect } from 'react'
import { useFonts } from 'expo-font'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PhoneAuthWithOtp from './src/screens/PhoneAuthWithOtp';
import { AppProvider } from './context/AppContext';

SplashScreen.preventAutoHideAsync();
const Stack = createStackNavigator();


const AppContent = () => {
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
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name='PhoneAuthWithOtp' component={PhoneAuthWithOtp} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    )
}



const App = () => {
    return (
        <AppProvider>
            <AppContent />
        </AppProvider>
    )
}

export default App


