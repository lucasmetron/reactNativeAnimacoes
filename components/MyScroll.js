import React, { useEffect, useState } from "react";
import {
    Text,
    View,
    Animated
} from 'react-native'

export default function MyScroll(props) {

    const [list, setList] = useState([])
    const color = new Animated.Value(0);

    useEffect(() => {
        const newList = []
        for (let i = 0; i < 25; i++) {
            newList.push({ id: i + 1 })
        }
        setList(newList)
    }, [])

    function onScroll(evt) {
        color.setValue(evt.nativeEvent.contentOffset.y) //pegando o valor Y e alterando valor do color conforme scroll
    }

    return (

        <Animated.ScrollView
            // onScroll={onScroll} //no evento de scroll vai executar a função e passar o valor do Y
            onScroll={Animated.event([{ nativeEvent: { contentOffset: { y: color } } }])}
            style={{
                backgroundColor: color.interpolate({
                    inputRange: [0, 500], // 0 a 500 é o tamanho da tela 0px até o 500 px
                    outputRange: ['red', '#0062ac'] //vai mudar de vermelho para azul
                })
            }}
        >
            {list.map(item => <Text style={{ height: 50, width: 100, color: 'white' }} key={item.id}>{item.id}</Text>)}
        </Animated.ScrollView>

    )
}