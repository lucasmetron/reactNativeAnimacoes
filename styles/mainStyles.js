import { StyleSheet, Platform } from "react-native";

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

const myOSStyle = Platform.select({ //aplica estilização dependendo do sistema
    ios: {
        color: colors.red
    },

    android: {
        color: colors.blue
    }
})

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mytext: {
        fontSize: 30,
        fontFamily: 'AwesomePossumDemo-Shine',
        ...myOSStyle //copia a estilização
    },
    margin: {
        margin: 10,
    },

    posicionador: {
        ...position //copia a estilização 
    }
})

export default styles;