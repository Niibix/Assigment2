import React from "react";
import { SafeAreaView, View } from "react-native";
import MapView from "react-native-maps";
import { Title, Appbar, Card, Text, List, Avatar } from "react-native-paper";
import { deliveryStyle } from "./delivery.style";

const DeliveryScreen = () => {
    return (
        <SafeAreaView style={deliveryStyle.flex}>
            <Appbar>
                <Appbar.BackAction />
                <Appbar.Content title="Delivery" />
            </Appbar>
            <View style={deliveryStyle.flex}>
                <MapView
                    style={deliveryStyle.flex}
                    initialRegion={{
                        latitude: 60.451813,
                        longitude: 22.266630,
                        latitudeDelta: 0.09,
                        longitudeDelta: 0.04
                    }}>

                </MapView>

            </View>
            <Card>
                <Card.Title
                    title={"6/11/2022"}
                    style={deliveryStyle.cardTitle}
                    right={() =>
                        <Text style={deliveryStyle.price}>20€</Text>
                    }>
                </Card.Title>
                <Card.Content>
                    <List.item
                        title={"Niibi"}
                        description="Best Delivery boy"
                        left={() =>
                            <Avatar.Image
                                size={52}
                                source={{ uri: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-1240w,f_auto,q_auto:best/newscms/2014_36/648031/140903-jerry-roy-crew-1242.jpg" }}
                            />
                        }
                    />
                    <List.Item
                        title="Origin"
                        description="Kebabkuja 69"
                        right={() =>
                            <List.Icon icon="flag-outline" />
                        }
                    />
                    <List.Item
                        title="Destination"
                        description="Mahatie 1"
                        right={() =>
                            <List.Icon icon="flag-checker" />
                        }
                    />



                </Card.Content>


            </Card>
        </SafeAreaView>
    )
}

export default DeliveryScreen;