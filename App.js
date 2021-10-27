import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

import styles, { colors } from './styles/mainStyles'

const App = () => {

  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.button}>
        <Text style={[styles.mytext, styles.margin]}> TESTE Lucas</Text>
      </TouchableOpacity>
      <Text style={[styles.mytext, styles.margin]}> TESTE Lucas</Text>
      <Button title='Click me' color={colors.red} />
    </View>
  );
};


export default App;
