import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Screens/HomeScreen';
import StepFirst from '../Screens/StepFirst';
import StepSecond from '../Screens/StepSecond';
import StepThird from '../Screens/StepThird';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Worker" component={StepFirst} options={{headerShown: false}} />
      <Stack.Screen name="Employer" component={StepSecond} options={{headerShown: false}} />
      <Stack.Screen name="Office" component={StepThird} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
