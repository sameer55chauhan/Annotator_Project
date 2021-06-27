import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import HomeScreen from './screens/HomeScreen';
import { default as theme } from './assets/app-theme/app-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <IconRegistry icons={EvaIconsPack} />
        <ApplicationProvider {...eva} theme={{ ...eva.dark, ...theme }}>
          <HomeScreen />
        </ApplicationProvider>
      </SafeAreaView>
    </NavigationContainer>
  );
};