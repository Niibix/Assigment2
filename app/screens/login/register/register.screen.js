import React from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Appbar, Button, TextInput } from "react-native-paper";

import { registerStyle } from "./register.style";

export const RegisterScreen = () => {

    const register = ({navigation}) => {
            navigation.navigate("Home");
    }

    return (

        <SafeAreaView>
            <ScrollView>
                <Appbar>
                    <Appbar.BackAction />
                    <Appbar.Content title="Registeration" />
                </Appbar>
                <View style={registerStyle.content}>
                    <TextInput label="Name" />
                    <TextInput label="Email" keyboardType="email-address" />
                    <TextInput label="Password" secureTextEntry={true} right={<TextInput.Icon icon="eye" color={registerStyle.icon.color} />} />
                    <TextInput label="Confirm password" secureTextEntry={true} right={<TextInput.Icon icon="eye" color={registerStyle.icon.color} />} />
                    <TextInput label="Phone number" keyboardType="phone-pad" />
                    <Button onClick={register} mode="contained" style={registerStyle.button}>Register</Button>
                </View>
            </ScrollView>
        </SafeAreaView>

    )

}