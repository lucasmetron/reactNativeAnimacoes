import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Animated
} from 'react-native';
import styles, { size } from './styles/mainStyles'


const App = () => {

  const [position, setPosition] = useState(new Animated.ValueXY({ x: 0, y: 0 }))


  function onPress() {
    const myAnimation = Animated.timing(position, {
      toValue: 100,
      duration: 2000
    })


    myAnimation.start()
  }

  return (
    <SafeAreaView style={styles.container} >

      <Animated.Text
        style={[styles.viewContainer, { left: position.x, top: position.y }]}
        onPress={onPress}
      >
        TreinaWeb
      </Animated.Text>

    </SafeAreaView>
  );
};


export default App;
