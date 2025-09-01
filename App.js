// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from './app/WelcomeScreen';
import GameLobby from './app/GameLobby';
import GameScreen from './app/GameScreen';
import ResultsScreen from './app/ResultsScreen';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="GameLobby" component={GameLobby} />
        <Stack.Screen name="GameScreen" component={GameScreen} />
        <Stack.Screen name="ResultsScreen" component={ResultsScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

