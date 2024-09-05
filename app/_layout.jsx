import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import * as font from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function rootLayout() {
  const [loaded, error] = useFonts({
    'Poppins-Black': require('../assets/fonts/Poppins-Black.ttf'),
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
    'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }
  return (
    <Stack>
    <Stack.Screen name="index" options={{ headerShown: false}} />
    </Stack>
  )
}


