import React from "react";
import { SafeAreaView, View} from "react-native";
import { Title, Appbar, Button } from "react-native-paper";
import { addressStyle } from "./adress.style";

const AddressScreen = () => {

 
    return (
        <SafeAreaView>
            <Appbar>
                <Appbar.BackAction />
                <Appbar.Content title="Address" />
            </Appbar>
            <View style = {addressStyle.margiHorizontal}>
                <TextInput 
                label="Orgin"/>
    
                <TextInput 
                label="Destination"/>
                </View>
            <View>
                <Button
                   icon="plus"
                   style={addressStyle.buttonIconAdd}
                   labelStyle={addressStyle.buttonIconAddLabelStyle}
                    ></Button>
            </View>
            <Button
            mode="contained"
            uppercase={false}
            style={addressStyle.readyButtonStyle}
            labelStyle={addressStyle.readyButtonLabelStyle}>
                Ready
            </Button>
        </SafeAreaView>
    )
}

export default AddressScreen;