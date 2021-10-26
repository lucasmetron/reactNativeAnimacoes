import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet
} from 'react-native';


const App = () => {

  return (
    <View style={styles.container} >
      <Text style={styles.mytext}> TESTE 2021</Text>
      <Text style={styles.mytext}> TESTE 2021</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mytext: {
    fontSize: 30,
  }
})

export default App;
