import 'react-native-gesture-handler';

import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { AppNavigator } from './navigation/index';
import { default as theme } from './assets/app-theme/app-theme.json';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

export default App = () => {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.dark}>
        <AppNavigator />
      </ApplicationProvider>
    </>
  );
};