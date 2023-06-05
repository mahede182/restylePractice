import { View, Button, Switch, Alert } from 'react-native'
import React from 'react'
import { useTheme } from '@shopify/restyle'
import { Box, Text, Card } from '../utils/theme'

import {
    createBox,
    createText,
    createTheme,
} from '@shopify/restyle';

const HomeScreen = ({ navigation, darkMode }) => {
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
                flexDirection={{ phone: 'column', tablet: 'row' }}
            >
                <Text variant="body" color="primaryCardText">
                    This is variant = body , color = primaryCardText , backgroundColor = homeBackground
                </Text>
                <Text variant="body" color="primaryCardText">
                    This is variant = body , color = primaryCardText , backgroundColor = homeBackground
                </Text>
                <Text margin="2" variant="body" color="primaryCardText">
                    This is variant = body , color = primaryCardText , backgroundColor = homeBackground
                </Text>
                <Text variant="body" color="primaryCardText">
                    This is variant = body , color = primaryCardText , backgroundColor = homeBackground
                </Text>
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
            <Button
                style={{
                    backgroundColor: '#2196F3',
                    padding: 10,
                    borderRadius: 5,
                }}
                borderRadius="rounded"
                padding="2"
                onPress={() => Alert.alert("Hello button")}
                title="button"
                color="#841584"
                backgroundColor="secondaryCardBackground"
                accessibilityLabel="Learn more about this purple button"
            >Not Button</Button>
            <Text>Hello world</Text>
            {/* <Card
                variant="cardVariants"
                justifyContent="center"
                alignItems="center">
                <Text variant="textBase">Card variants</Text>
            </Card> */}
        </View>
    )
}

export default HomeScreen