import React, { useEffect } from "react";
import {
    Text,
    View,
    Animated
} from 'react-native'

export default function MyButton(props) {

    let progress = new Animated.Value(0)
    let animation;

    useEffect(() => {
        progress.addListener(({ value }) => {
            if (value === 100) {
                props.onFullPress()
            }
        })

    }, [progress])

    function onPress() {
        let progresso = progress
        progresso.setValue(0)

        animation = Animated.timing(progresso, {
            toValue: 100,
            duration: 2000
        })

        animation.start()
    }

    function onUnPress() {
        animation.stop()
        progress.setValue(0)
    }

    return (
        <View
            onStartShouldSetResponder={() => true}
            onResponderGrant={onPress}
            onResponderRelease={onUnPress}
            style={{ backgroundColor: '#0062ac', width: 100, padding: 10 }}
        >
            <Text style={{ textAlign: 'center', color: 'white' }}>{props.children}</Text>
            <Animated.View style={{ backgroundColor: '#ccc', height: 10, width: progress }}></Animated.View>
        </View>
    )
}