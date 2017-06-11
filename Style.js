import {StyleSheet} from 'react-native';

const red = '#a2273c';
const white = '#ffffff';

export default StyleSheet.create({
    container: {
        margin: 20
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 20
    },
    button: {
        backgroundColor: red,
        color: white
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    },
    header: {
        backgroundColor: red
    },
    headerTitle: white
});