import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Switch } from 'react-native';
// import Switch from './components/Switch';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import HomeTest from './components/HomeTest';

// for shopify theme provider
import { ThemeProvider as RestyleThemeProvider } from "@shopify/restyle";
import theme from './utils/theme';
import { darkTheme } from './utils/theme';

export default function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <SafeAreaView style={styles.container}>
      <RestyleThemeProvider theme={darkMode ? darkTheme : theme}>
        <Switch style={{ marginLeft: 'auto', padding: 10 }} value={darkMode} onValueChange={(value) => setDarkMode(value)} trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={darkMode ? '#213511' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e" />
        <NavigationContainer>
          <StackNavigation />
        </NavigationContainer>
      </RestyleThemeProvider>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
});
