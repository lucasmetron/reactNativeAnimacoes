import React from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView
} from 'react-native';
import styles, { colors } from './styles/mainStyles'
import LinearGradient from 'react-native-linear-gradient';

const App = () => {

  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.viewContainer}>
        <Text style={styles.text}>ABC</Text>
        <Text style={styles.text}>DEF</Text>
        <Text style={styles.text}>GHI</Text>
      </View>

    </SafeAreaView>
  );
};


export default App;
