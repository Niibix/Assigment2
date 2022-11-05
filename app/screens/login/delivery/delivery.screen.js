import React from "react";
import { SafeAreaView } from "react-native";
import { Title, Appbar } from "react-native-paper";

const DeliveryScreen = () => {
    return (
        <SafeAreaView>
            <Appbar>
                <Appbar.BackAction />
                <Appbar.Content title="Delivery" />
            </Appbar>
        </SafeAreaView>
    )
}

export default DeliveryScreen;