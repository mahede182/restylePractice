import { View, Button } from 'react-native'
import React from 'react'
// for @shopify/restyle
import { Box, Text } from '../utils/theme'

const CartScreen = () => {
    return (
        <Box flex={1} backgroundColor="mainBackground" padding="2" >
            <Text variant="textLg">Cart</Text>
            <Box
                backgroundColor="homeBackground"
                padding="1"
                marginVertical="3"
            >
                <Text variant="body" background="cartBackground" color="primaryCardText">capaccino</Text>
                <Text variant="body" background="cartBackground" color="primaryCardText">Coffee</Text>
                <Text variant="body" background="cartBackground" color="primaryCardText">Tea</Text>
                {/* Add your cart items here */}
            </Box>
            <Box
                backgroundColor="homeBackground"
                padding="1"
                marginVertical="3"
            >
                <Text variant="text4Xl">hello world</Text>
                {/* Add your cart items here */}
            </Box>
        </Box>
    )
}

export default CartScreen

