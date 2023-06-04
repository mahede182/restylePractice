import React from 'react'
import { View, Text } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';

// import component
import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';
import HomeTest from '../components/HomeTest';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (

        <Stack.Navigator initialRouteName='HomeScreen'>
            <Stack.Screen name="HomeScreen" component={HomeScreen} />
            <Stack.Screen name="CartScreen" component={CartScreen} />
        </Stack.Navigator>

    )
}

export default StackNavigation