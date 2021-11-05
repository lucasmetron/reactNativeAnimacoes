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
    const myAnimation = Animated.spring(position, {
      toValue: 100,
      friction: 1,
      // bouncines: 20, quicada no final
      // speed: 20 velocidade do movimento
      tension: 100 // força que a mola é acionada
    })

    myAnimation.start()

  }



  return (
    <SafeAreaView style={styles.container} >

      <Animated.Text
        style={[styles.viewContainer, { left: position }]}
        onPress={onPress}
      >
        TreinaWeb
      </Animated.Text>

    </SafeAreaView>
  );
};


export default App;
