import React from "react";
import { SafeAreaView } from "react-native";
import { Text, Appbar, Card } from "react-native-paper";
import { deliveriesStyle } from "./deliveries.style";

const DeliveriesScreen = () => {

    const deliveries = [1, 2];

    return (
        <SafeAreaView>
                 <Appbar>
                <Appbar.BackAction />
                <Appbar.Content title="My Deliveries" />
            </Appbar>
                <Card.Title
                style={deliveriesStyle.cardTitle}
                title="6/11/2022"
                subtitle="Person"
                right={() =>
                    <Text style={deliveriesStyle.price}>20€</Text>
                } />
        </SafeAreaView>
    )

}

export default DeliveriesScreen;