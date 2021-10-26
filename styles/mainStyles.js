import { StyleSheet } from "react-native";

export const colors = {
    blue: '#0062ac',
    red: '#903232'
}

const position = {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mytext: {
        fontSize: 30,
        color: colors.blue
    },
    margin: {
        margin: 10,
    },

    posicionador: {
        ...position
    }
})

export default styles;