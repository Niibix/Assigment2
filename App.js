import { useEffect, useState } from 'react';
import {Provider as PaperProvider, TextInput} from 'react-native-paper'
import { LoginScreen } from './app/screens/login/login.screen';


export default function App() {
  return (
    <PaperProvider>
      <LoginScreen/>
    </PaperProvider>
  

)};