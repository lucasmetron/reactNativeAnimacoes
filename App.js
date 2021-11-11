import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Animated,
  Switch,

} from 'react-native';
import styles, { size } from './styles/mainStyles'
import MyScroll from './components/MyScroll';

const App = () => {


  return (
    <SafeAreaView style={styles.container} >
      <MyScroll />
    </SafeAreaView>
  );
};


export default App;
