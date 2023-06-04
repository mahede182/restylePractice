import { View, Button, Switch } from 'react-native'
import React from 'react'
import { useTheme } from '@shopify/restyle'


import {
    createBox,
    createText,
    createTheme,
} from '@shopify/restyle';

const Box = createBox();
const Text = createText();


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
                margin="s"
                padding="m"
                style={{ marginHorizontal: 10 }}
            >
                <Text variant="body" color="primaryCardText">
                    This is variant = body , color = primaryCardText , backgroundColor = homeBackground
                </Text>
            </Box>
            <Box
                backgroundColor="homeBackground"
                margin="s"
                padding="m"
            >
                <Text color="primaryCardText" textVariants="header"> Header</Text>
            </Box>
            <Box
                backgroundColor="homeBackground"
                margin="l"
                padding="m"
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
                margin="l"
                padding="m">
                <Text variant="header" color="secondaryCardBackground">
                    margin = l, padding = m ,This is variant = body , color = primaryCardText
                </Text>
            </Box>
            <Text>Hello world</Text>
        </View>
    )
}

export default HomeScreen