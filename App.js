import React, { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from "./scene/Login"
import Register from "./scene/Register"
import Dashboard from "./scene/Dashboard"

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false  }}>
        <Stack.Screen name="Login" component={Login}  />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

