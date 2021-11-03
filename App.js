import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  ImageBackground,
  SafeAreaView,
  Dimensions
} from 'react-native';
import styles, { size } from './styles/mainStyles'
import LinearGradient from 'react-native-linear-gradient';


const App = () => {

  const [screenSize, setScreenSize] = useState(50)
  const { width, height } = Dimensions.get('window');

  function getSize() {
    if (height > width) {
      return (width / 3) - 8
    } else {
      return (width / 6) - 8
    }
  }

  useEffect(() => {
    Dimensions.addEventListener("change", () => {
      setScreenSize(getSize())
    })
  }, [])




  return (
    <SafeAreaView style={styles.container} >

      <View style={styles.viewContainer}>
        <Text style={[styles.text, { width: screenSize, height: screenSize }]}>ABC</Text>
        <Text style={[styles.text, { width: screenSize, height: screenSize }]}>DEF</Text>
        <Text style={[styles.text, { width: screenSize, height: screenSize }]}>GHI</Text>
        <Text style={[styles.text, { width: screenSize, height: screenSize }]}>ABC</Text>
        <Text style={[styles.text, { width: screenSize, height: screenSize }]}>DEF</Text>
        <Text style={[styles.text, { width: screenSize, height: screenSize }]}>GHI</Text>
      </View>

    </SafeAreaView>
  );
};


export default App;
