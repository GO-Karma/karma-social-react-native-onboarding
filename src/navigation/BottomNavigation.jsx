import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const screenOptions = { lazy: false, headerShown: false }

export const BottomNavigation = () => (
  <Tab.Navigator screenOptions={screenOptions}>{/* // write your logic */}</Tab.Navigator>
)
