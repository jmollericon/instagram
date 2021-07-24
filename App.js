import React from 'react';

import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyAKER69L-rKweBPqO5aqmb8cRCpq0gPoeM",
  authDomain: "instagram-ec356.firebaseapp.com",
  projectId: "instagram-ec356",
  storageBucket: "instagram-ec356.appspot.com",
  messagingSenderId: "457424229588",
  appId: "1:457424229588:web:dd0a34da27f2fb1d991741",
  measurementId: "G-N4M8W81HTM"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';
import RegisterScreen from './components/auth/Register';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='landing'>
        <Stack.Screen name='Landing' component={LandingScreen} options={{ headerShown: false }} />
        <Stack.Screen name='Register' component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}