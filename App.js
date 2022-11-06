import { useEffect, useState } from 'react';
import {Provider as PaperProvider, TextInput} from 'react-native-paper'
import {theme} from './App.style'
import AddressScreen from './app/screens/login/address/address.screen';
import DeliveryScreen from './app/screens/login/delivery/delivery.screen';
import HomeScreen from './app/screens/login/home/home.screen';
import { LoginScreen } from './app/screens/login/login.screen';
import { RegisterScreen } from './app/screens/login/register/register.screen';


export default function App() {
  return (
    <PaperProvider theme={theme}>
      <DeliveryScreen/>
    </PaperProvider>
  

)};