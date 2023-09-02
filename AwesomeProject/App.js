import * as React from 'react';
import { Text, SafeAreaView, StyleSheet, View, Platform, StatusBar } from 'react-native';
//import Constants from 'expo-constants';
import {colors} from './src/utils/colors';
// You can import supported modules from npm
import {Focus} from './src/features/Focus';
// or any files within the Snack
import AssetExample from './src/components/AssetExample';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Focus />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //padding: Platform.OS==='ios'?50:100,
    paddingTop: Platform.OS==='android'?StatusBar.currentHeight:0,
    backgroundColor: colors.darkBlue,
  },
});
