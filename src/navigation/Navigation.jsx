import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import { Loader } from '../screens/Loader/Loader'
import { BottomNavigation } from './BottomNavigation'

const Stack = createNativeStackNavigator()

const screenOptions = { headerShown: false }

export const Navigation = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Loader" screenOptions={screenOptions}>
      <Stack.Screen name="Loader" component={Loader} />
      <Stack.Screen name="HomeTab" component={BottomNavigation} />
      {/* // write your logic */}
    </Stack.Navigator>
  </NavigationContainer>
)
