import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Topframe1 from './components/Topframe1';
import Searchbox from './components/searchBox';
import Categorysection from './components/Categorysection';
import Ongsection from './components/Ongsection';


export default function App() {
  return (
    <View style={styles.container}>
 <Topframe1 />
 <Searchbox />
 <Category />
  <Ongsection />
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  '#F7F0E8',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
