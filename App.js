import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Animated
} from 'react-native';
import styles, { size } from './styles/mainStyles'


const App = () => {

  const [x, setX] = useState(new Animated.Value(0))
  const [y, setY] = useState(new Animated.Value(0))


  function onPress() {
    const myAnimationX = Animated.timing(x, {
      toValue: x._value === 0 ? 100 : 0, //dessa forma fica um toggle 
      duration: 2000
    })

    const myAnimationY = Animated.timing(y, {
      toValue: y._value === 0 ? 100 : 0, //dessa forma fica um toggle 
      duration: 2000
    })
    myAnimationX.start()
    myAnimationY.start()

    setTimeout(() => {
      myAnimationX.stop() // para a animação
      myAnimationY.stop()
      myAnimationX.reset() //reseta para o valor incial que foi colocado no state
      myAnimationY.reset()
    }, 1000)
  }

  return (
    <SafeAreaView style={styles.container} >

      <Animated.Text
        style={[styles.viewContainer, { left: x, bottom: y }]}
        onPress={onPress}
      >
        TreinaWeb
      </Animated.Text>

    </SafeAreaView>
  );
};


export default App;
