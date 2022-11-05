import React from "react";
import { Card, List, IconButton,Button} from "react-native-paper";
import { View } from "react-native";
import { confirmDeliveryCardStyle } from "./confirm-delivery-card.style";
export const ConfirmDeliveryCardComponent = () => {

    return (
        <Card>
        <Card.Content>
          <List.Item
            title="20 €"
            description="Total price of the delivery"
            left={() =>
              <IconButton
                icon="bike"
                size={30}
                Style={confirmDeliveryCardStyle.icon}
                color={confirmDeliveryCardStyle.icon.color} />
            }
            right={() =>
              <View>
                <Button
                  styker={confirmDeliveryCardStyle.cancelButton}>Cancel</Button>
                <Button mode="contained">Confirm</Button>
              </View>
            }
          />
        </Card.Content>
      </Card>
    )

}