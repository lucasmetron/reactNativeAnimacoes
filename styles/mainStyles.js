import react, { useEffect } from "react";
import { StyleSheet, Platform, Dimensions } from "react-native";

export const colors = {
    blue: '#0062ac',
    red: '#903232',
    yellow: '#f4c01e'
}

const { width } = Dimensions.get('window');
export const size = (width / 3) - 8


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    viewContainer: {
        backgroundColor: colors.yellow,
        padding: 10,
        fontSize: 20
    },


})

export default styles;