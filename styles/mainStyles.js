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
            { rotateX: '300deg' },
            { rotateY: '250deg' },
            { rotateZ: '90deg' },
        ]
    },
    margin: {
        margin: 10,
    },

})

export default styles;