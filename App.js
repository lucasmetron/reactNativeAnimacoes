import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

import styles, { colors } from './styles/mainStyles'

const App = () => {

  return (
    <View style={styles.container} >
      <TouchableOpacity style={styles.button}>
        <ImageBackground style={{ width: 300, height: 200 }} source={{ uri: 'https://img.freepik.com/fotos-gratis/paisagem-campo-verde-com-fundo-de-arvore_28976-644.jpg?size=626&ext=jpg' }}>
          <Text style={[styles.mytext, styles.margin]}> TESTE Lucas</Text>
        </ImageBackground>
      </TouchableOpacity>

      <Button title='Click me' color={colors.red} />
    </View>
  );
};


export default App;
