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

      <LinearGradient
        start={{ x: 0, y: 0 }} //define direção do gradiente, mas não é obrigatório
        end={{ x: 1, y: 0 }} //define direção do gradiente, mas não é obrigatório
        locations={[0.4, 0.6, 0.8]} //define onde começa e a caba o gradiente. Como colocamos 3 cores, precisamos passar 3 numeros 
        colors={['red', 'green', '#192f6a']} //devemos passar o array de cores, PODE SER MAIS DE 3
        style={styles.linearGradient}
      >
        <Text style={[styles.mytext, styles.margin]}> TESTE Lucas</Text>
      </LinearGradient>

      <Button title='click' />

    </View>
  );
};


export default App;
