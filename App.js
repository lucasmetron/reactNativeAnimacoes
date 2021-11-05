import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Animated,
  Easing,
} from 'react-native';
import styles, { size } from './styles/mainStyles'


const App = () => {

  const [position, setPosition] = useState(new Animated.Value(0))

  function onPress() {

    const myAnimation = Animated.timing(position, {
      toValue: 1,
      duration: 2000,
      easing: Easing.elastic(5)
    })

    myAnimation.start()


  }

  const myLeftAnimation = position.interpolate({
    inputRange: [0, 1],
    // outputRange: ['red', 'blue']
    outputRange: ['0deg', '360deg']
  })

  return (
    <SafeAreaView style={styles.container} >

      <Animated.Text
        // style={[styles.viewContainer, { backgroundColor: myLeftAnimation }]}
        style={[styles.viewContainer, { transform: [{ rotate: myLeftAnimation }] }]}
        onPress={onPress}
      >
        TreinaWeb
      </Animated.Text>

    </SafeAreaView>
  );
};


export default App;
