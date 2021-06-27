import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from './src/Navigation/AppNavigator';

function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <AppNavigator />
    </NavigationContainer>
  );
}

export default App;