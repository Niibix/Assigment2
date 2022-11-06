import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/native-stack";
import { LoginScreen } from "./login.screen";
import HomeScreen from "./home/home.screen";
import { RegisterScreen } from "./register/register.screen";


const Stack = createStackNavigator ();

const AppNavigator = () => (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen
            name="Login"
            component={LoginScreen}/>
            <Stack.Screen
            name="Home"
            component={HomeScreen}/>
            <Stack.Screen
            name="Register"
            component={RegisterScreen}/>
        </Stack.Navigator>

    </NavigationContainer>
)

export default AppNavigator;