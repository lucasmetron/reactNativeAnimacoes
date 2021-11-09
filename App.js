import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Animated,
  Switch,

} from 'react-native';
import styles, { size } from './styles/mainStyles'

const App = () => {

  const position = new Animated.Value(0)
  const position2 = new Animated.Value(0)


  function onPress() {
    position.setValue(0)
    position2.setValue(0)

    const myAnimation = Animated.timing(position, {
      toValue: 100,
      duration: 2000,
    })

    const myAnimation2 = Animated.timing(position2, {
      toValue: -100,
      duration: 2000,
    })

    Animated.parallel([ //dessa forma as duas animações iram acontecer no memso tempo
      myAnimation,
      myAnimation2
    ]).start()

    // myAnimation.start() antes usavamos assim, mas isso não garante a execução das duas ao mesmo tempo
    // myAnimation2.start()
  }

  return (
    <SafeAreaView style={styles.container} >
      <Animated.Text
        style={[styles.viewContainer, { left: position }]}
      >
        TreinaWeb
      </Animated.Text>

      <Animated.Text
        style={[styles.viewContainer, { left: position2 }]}
        onPress={onPress}
      >
        TreinaWeb
      </Animated.Text>


    </SafeAreaView>
  );
};


export default App;
