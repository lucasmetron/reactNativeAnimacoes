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
      toValue: position._value === 0 ? 100 : 0,
      duration: 2000,
      // easing: Easing.ease acelera no final
      // easing: Easing.bounce da uma quicada no final
      // easing: Easing.back(10) antes de ir pro lugar final, ele vai pra tras o quanto quisermor em px 
      easing: Easing.elastic(5) //balança como se tivesse em um elastico
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
