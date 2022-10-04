import * as React from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import register from './components/register'
import Happy6 from './components/Happy6'
import Happy7 from './components/Happy7'
import Happy8 from './components/Happy8'
import Happy9 from './components/Happy9'
import Happy10 from './components/Happy10'
import Home from './components/Homepage';
import login from './components/login'
import Happy11 from './components/Happy11'
const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="login" component={login}
        options={{
          headerShown : false
        }}
      />
      <Stack.Screen name="register" component={register}
        options={{
          headerShown : false
        }}
      />
       <Stack.Screen name="Happy6" component={Happy6}
        options={{
          headerShown : false
        }}
      />
      <Stack.Screen name="Happy7" component={Happy7}
        options={{
          headerShown : false
        }}
      />
      <Stack.Screen name="Happy8" component={Happy8}
        options={{
          headerShown : false
        }}
        />
        <Stack.Screen name="Happy9" component={Happy9}
        options={{
          headerShown : false
        }}
      />
      <Stack.Screen name="Happy10" component={Happy10}
        options={{
          headerShown : false
        }}
      />
      <Stack.Screen name="Happy11" component={Happy11}
        options={{
          headerShown : false
        }}
      />
      <Stack.Screen name="Homepage" component={Home}
        options={{
          headerShown : false
        }}
      />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
