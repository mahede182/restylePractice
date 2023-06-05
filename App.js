import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigation from './navigation/StackNavigation';
import HomeTest from './components/HomeTest';

// for shopify theme provider
import { ThemeProvider as RestyleThemeProvider } from "@shopify/restyle";
import theme from './utils/theme';
import { darkTheme } from './utils/theme';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (

    <SafeAreaView style={styles.container}>
      <RestyleThemeProvider theme={darkMode ? darkTheme : theme}>
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
