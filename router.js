// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Signup from '../../screens/signup';
import Home from '../../screens/home';
import BookNow from '../../screens/booknowCards';
import Profile from '../../screens/profile';
import Contact from '../../screens/contact';
import About from '../../screens/about';
import Footer from '../../components/footer';
import Login from '../../screens/login';
import Book from '../../screens/booking';



const Stack = createNativeStackNavigator();

export default function Routering() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="signup"
          options={{
            headerShown: false
          }}
          component={Signup} />
        <Stack.Screen name="Login" options={{
          headerShown: false
        }} component={Login} />
        <Stack.Screen name="Cards" options={{
          headerShown: false
        }} component={Home} />
        <Stack.Screen name="Hotel" options={{
          headerShown: false
        }} component={Book} />

        <Stack.Screen name="about" options={{
          headerShown: false
        }} component={About} />

        <Stack.Screen name="contact" options={{
          headerShown: false
        }} component={Contact} />




        <Stack.Screen name="profile" options={{
          headerShown: false
        }} component={Profile} />
        <Stack.Screen name="footer" options={{
          headerShown: false
        }} component={Footer} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
