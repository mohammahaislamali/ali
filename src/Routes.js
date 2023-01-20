// In App.js in a new project

import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Home';
import Add from './Add';
import Login from './Login';
import Screen from './Screen';

const Stack = createNativeStackNavigator();

const Routes =()=> {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Screen" component={Screen} /> 
      {/* <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Home" component={Home} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;