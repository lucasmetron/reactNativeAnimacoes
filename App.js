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

  const [canPress, setCanPress] = useState(true)
  const position = new Animated.Value(0)
  const position2 = new Animated.Value(0)

  useEffect(() => {
    console.log('canpress', canPress)
  }, [canPress])


  async function onPress() {

    if (canPress) {
      setCanPress(false)
      position.setValue(-100)
      position2.setValue(0)

      const myAnimation = Animated.timing(position, {
        toValue: 0,
        duration: 1000,
      })

      const myAnimation2 = Animated.spring(position2, {
        toValue: 100,
        friction: 1,
      })

      await Animated.stagger(1000, [
        myAnimation,
        myAnimation2,
      ]).start(setCanPress(true))
    }
  }

  return (
    <SafeAreaView style={styles.container} >
      <Animated.Text
        style={[styles.viewContainer, { top: position }]}
      >
        TreinaWeb
      </Animated.Text>

      <Animated.Text
        style={[styles.viewContainer, { top: position2 }]}
        onPress={onPress}
      >
        TreinaWeb
      </Animated.Text>


    </SafeAreaView>
  );
};


export default App;
