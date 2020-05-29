import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogIn from './components/LogIn';
import SignIn from './components/SignIn'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={LogIn} />
        <Stack.Screen name="Cuenta" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

