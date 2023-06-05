import { View, Text } from 'react-native'
import React from 'react'

const Switch = ({ darkMode }) => {
    return (
        <View>
            <Switch
                value={darkMode}
                onValueChange={(value) => setDarkMode(value)}
            />
        </View>
    )
}

export default Switch