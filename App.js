import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Animated,
  Switch,

} from 'react-native';
import styles, { size } from './styles/mainStyles'
import MyButton from './components/MyButton';

const App = () => {

  function onFullPress() {
    console.log('Clique Feito')
  }


  return (
    <SafeAreaView style={styles.container} >
      <MyButton onFullPress={onFullPress}>Lucas Rosa </MyButton>
    </SafeAreaView>
  );
};


export default App;
