import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import HomeScreen from './src/homes/HomeScreen';

const App = () => {
  return (
    <>
      {/* <StatusBar
        translucent
        barStyle={'light-content'}
        backgroundColor="transparent"
      /> */}
      <SafeAreaView style={{flex: 1}}>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
