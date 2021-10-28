import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import styles, { colors } from './styles/mainStyles'
import LinearGradient from 'react-native-linear-gradient';

const App = () => {

  return (
    <View style={styles.container} >

      <Text style={[styles.mytext, styles.margin]}> TESTE Lucas</Text>
      <Button title='click' />

    </View>
  );
};


export default App;
