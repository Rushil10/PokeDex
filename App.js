import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PokeDex from './src/PokeDex'
import store from './src/redux/store'
import {Provider} from 'react-redux'

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PokeDex" component={PokeDex} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}


