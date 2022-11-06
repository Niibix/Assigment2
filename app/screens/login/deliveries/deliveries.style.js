import { StyleSheet } from "react-native";
import { theme } from "../../../../App.style";

export const deliveriesStyle = StyleSheet.create({
    cardTitle: {
        color: theme.colors.primary,
    },
    price: {
        color: theme.colors.primary,
        fontWeight: "bold",
        marginEnd: 15,
    }
})