import { StyleSheet, Platform } from "react-native";

export const colors = {
    blue: '#0062ac',
    red: '#903232',
    yellow: '#f4c01e'
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: colors.red
    },

    viewContainer: {
        flexDirection: 'row',
        backgroundColor: colors.yellow,
        flex: 0.5, // a propriedade flex diz o quanto o elemento deve crescer, se fosse 0.5, seria a metade da tela
        flexWrap: 'wrap'
    },

    text: {
        width: 150,
        height: 150,
        backgroundColor: colors.blue,
        color: 'white',
        margin: 5,
    }


})

export default styles;