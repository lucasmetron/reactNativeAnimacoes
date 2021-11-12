import React, { useState, useEffect } from "react";
import { Text, Animated, PanResponder } from 'react-native'

export default function MyListItem(props) {

    const [title, setTitle] = useState('')

    let position = new Animated.ValueXY();
    let opacity = new Animated.Value(1);
    let panResponder = createPanResponder();

    useEffect(() => {
        setTitle(props.title)
    }, [props.title]);

    function createPanResponder() {
        return PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {
                position.setValue({ x: gestureState.dx, y: gestureState.dy })
            },
            onPanResponderRelease: (evt, gestureState) => {
                if (evt.nativeEvent.pageY <= 100) {
                    Animated.timing(opacity, {
                        toValue: 0,
                        duration: 1000
                    }).start(props.onDrop)
                } else {
                    Animated.spring(position, {
                        toValue: 0,
                        friction: 5,
                    }).start()
                }

            }
        })
    }
    return (
        <Animated.View
            {...panResponder.panHandlers}
            style={[position.getLayout(), { padding: 15, backgroundColor: '#f4c01e', opacity: opacity }]}
        >
            <Text style={{ backgroundColor: '#0062ac', color: 'white' }}>{title}</Text>
        </Animated.View>
    );
}