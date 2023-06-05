import { View, Button, Switch } from 'react-native'
import React from 'react'
import { useTheme } from '@shopify/restyle'
import { Box, Text } from '../utils/theme'

import {
    createBox,
    createText,
    createTheme,
} from '@shopify/restyle';

const HomeScreen = ({ navigation }) => {
    const theme = useTheme();
    const { cardPrimaryBackground } = theme.colors;
    return (
        <View>
            <Text style={cardPrimaryBackground}>Home</Text>
            <Button
                title="Go to Cart"
                onPress={() => navigation.navigate('CartScreen')}
            />

            <Box
                backgroundColor="homeBackground"
                margin="2"
                padding="2"
                style={{ marginHorizontal: 10 }}
            >
                <Text variant="body" color="primaryCardText">
                    This is variant = body , color = primaryCardText , backgroundColor = homeBackground
                </Text>
            </Box>
            <Box
                backgroundColor="homeBackground"
                margin="2"
                padding="1"
            >
                <Text color="primaryCardText" textVariants="textLg"> Header</Text>
            </Box>
            <Box
                backgroundColor="homeBackground"
                margin="2"
                padding="2"
            >
                <Text variant="body" color="primaryCardText">
                    margin = l, padding = m ,This is variant = body , color = primaryCardText
                </Text>
            </Box>
            <Text variant="body" color="primaryCardText">
                margin = l, padding = m ,This is variant = body , color = primaryCardText
            </Text>
            <Box
                backgroundColor="secondaryCardBackground"
                margin="2"
                padding="1">
                <Text variant="" color="secondaryCardBackground">
                    margin = l, padding = m ,This is variant = body , color = primaryCardText
                </Text>
            </Box>
            <Text>Hello world</Text>
        </View>
    )
}

export default HomeScreen