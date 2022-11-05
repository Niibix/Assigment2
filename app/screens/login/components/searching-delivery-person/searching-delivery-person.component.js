import React from "react";
import {View} from "react-native"
import { ActivityIndicator, Button, Title } from "react-native-paper";
import { SerachingDeliveryPersonStyle } from "./serching-delivery-person.style";

export const SerachingDeliveryPersonComponent = () => {


    return (
        <View
        style={serachingDeliveryPersonStyle.flexCenterColumn}>
        <ActivityIndicator
          animating={true}
          color={serachingDeliveryPersonStyle.icon.color} />
        <Title
          style={SerachingDeliveryPersonStyle.title}>
          Searching for Delivery person</Title>
        <Button
          style={serachingDeliveryPersonStyle.cancelButton}
          mode="contained">
          Cancel
        </Button>
      </View>
    )
}