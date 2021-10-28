import { StyleSheet, Platform } from "react-native";

export const colors = {
    blue: '#0062ac',
    red: '#903232',
    yellow: '#f4c01e'
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mytext: {
        fontSize: 30,
        backgroundColor: colors.yellow,
        transform: [
            { skewX: '40deg' },
            { skewY: '50deg' }
        ]
    },
    margin: {
        margin: 10,
    },

})

export default styles;