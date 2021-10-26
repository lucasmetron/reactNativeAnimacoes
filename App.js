import React from 'react';
import {
  Text,
  View,
  Button,
} from 'react-native';

import styles, { colors } from './styles/mainStyles'

const App = () => {

  return (
    <View style={styles.container} >
      <Text style={[styles.mytext, styles.margin]}> TESTE 2021</Text>
      <Text style={[styles.mytext, { fontSize: 50 }]}> TESTE 2021</Text>
      <Text style={styles.mytext}> TESTE 2021</Text>
      <Button title='Click me' color={colors.red} />
    </View>
  );
};


export default App;
