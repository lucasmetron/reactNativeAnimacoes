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
      toValue: 100,
      duration: 1000,
    })

    myAnimation.start()
  }

  const myLeftAnimation = position.interpolate({
    inputRange: [0, 20, 40, 60, 80, 100], //são as porcetagens de 0 a 100
    outputRange: [0, 100, 50, 80, 0, 100] // valores a qual eu quero que esteja quando chegar na porcentagem do inputRange
  })

  return (
    <SafeAreaView style={styles.container} >

      <Animated.Text
        style={[styles.viewContainer, { left: myLeftAnimation }]}
        onPress={onPress}
      >
        TreinaWeb
      </Animated.Text>

    </SafeAreaView>
  );
};


export default App;
