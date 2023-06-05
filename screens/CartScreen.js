import { View, Text, Button } from 'react-native'
import React from 'react'
// for @shopify/restyle

import { createBox } from '@shopify/restyle'

const Box = createBox();
const CartScreen = () => {
    return (
        <Box flex={1} backgroundColor="cartBackground" padding="2" >
            <Text variant="heading">Cart</Text>
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
        </Box>
    )
}

export default CartScreen

