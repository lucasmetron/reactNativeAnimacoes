import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Dimensions
} from 'react-native';
import styles, { colors, size } from './styles/mainStyles'
import LinearGradient from 'react-native-linear-gradient';

const App = () => {

  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.viewContainer}>
        <Text style={[styles.text, { width: size, height: size }]}>ABC</Text>
        <Text style={[styles.text, { width: size, height: size }]}>DEF</Text>
        <Text style={[styles.text, { width: size, height: size }]}>GHI</Text>
        <Text style={[styles.text, { width: size, height: size }]}>ABC</Text>
        <Text style={[styles.text, { width: size, height: size }]}>DEF</Text>
        <Text style={[styles.text, { width: size, height: size }]}>GHI</Text>
      </View>

    </SafeAreaView>
  );
};


export default App;
