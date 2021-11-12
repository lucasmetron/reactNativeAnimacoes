import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Animated,
  Switch,

} from 'react-native';
import styles, { size } from './styles/mainStyles'
import MyListItem from './components/MyListItem';

const App = () => {

  const [list, setList] = useState([
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'C#' },
    { id: 3, name: 'Python' },
    { id: 4, name: 'PHP' },
    { id: 5, name: 'Ruby' },
  ])

  function onRemove(itemToRemove) {
    const newList = list.filter(item => item.id !== itemToRemove.id)
    setList(newList)
  }

  useEffect(() => {
    console.log(list)
  }, [list])

  return (
    <SafeAreaView style={styles.container} >
      <View style={{ position: 'absolute', top: 0, width: '100%', height: 100, backgroundColor: 'lightgreen' }}>
      </View>

      <View>
        {list.map(item => <MyListItem onDrop={() => onRemove(item)} key={item.id} title={item.name} />)}
      </View>

    </SafeAreaView>
  );
};


export default App;
