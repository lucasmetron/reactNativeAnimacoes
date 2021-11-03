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
        backgroundColor: colors.red
    },

    viewContainer: {
        backgroundColor: colors.yellow,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
    },

    text: {
        width: 50,
        height: 50,
        backgroundColor: colors.blue,
        color: 'white',
        marginBottom: 5
    }


})

export default styles;