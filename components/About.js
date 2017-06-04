import React from 'react';
import {View, Text, StyleSheet} from'react-native';

export default class About extends React.Component {

    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}>A propos de moi</Text>
                <Text>Je suis développeur et passionné de web</Text>
                <Text>J'ime apprendre de nouvelles technologies permettent de concevoir des sites ou des applications web et mobile.</Text>
                <Text>J'ai donc conçu pour vous cette application pour que vos puissiez avoir la météo près de chez vous</Text>
            </View>
        )
    }

}

const style = StyleSheet.create({
    view: {
        margin: 20
    },
    title: {
        fontSize: 22,
        marginBottom: 20
    }
});