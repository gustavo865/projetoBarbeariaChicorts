import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

import mock from './src/mocks/barber';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import "./src/config/firebase"

import Login from './src/telas/Login';
import NewUser from './src/telas/NewUser';
import Teste from './src/telas/Teste';
import Barber from './src/telas/Barber';

const Stack = createStackNavigator();

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }} >
      <StatusBar />

      <NavigationContainer>
        <Stack.Navigator initialRouteName="BarberShop">
          <Stack.Screen
            name="BarberShop"
            component={Barber}
            options={{
              headerShown: false
              //headerTitleAlign: "center",
              //headerTintColor: '#111111',
            }}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Voltar'
              //headerTitleAlign: "center",
              //headerTintColor: '#111111',
            }}
          />
          <Stack.Screen
            name="NewUser"
            component={NewUser}
            options={{
              headerShown: true,
              title: 'Voltar'
              //headerTintColor: '#111111',
            }}
          />
       
        </Stack.Navigator>
      </NavigationContainer>

    </SafeAreaView>
  );
}