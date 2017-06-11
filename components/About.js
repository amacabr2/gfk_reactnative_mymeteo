import React from 'react';
import {View, Text, StyleSheet, Image} from'react-native';
import style from '../Style';

export default class About extends React.Component {

    static navigationOptions = {
      tabBarIcon: () => {
          return <Image source={require('./icons/user.png')} style={{width: 30, height: 30}}/>
      }
    };

    render() {
        return (
            <View style={style.container}>
                <Text style={style.title}>A propos de moi</Text>
                <Text>Je suis développeur et passionné de web</Text>
                <Text>J'aime apprendre de nouvelles technologies permettent de concevoir des sites ou des applications web et mobile.</Text>
                <Text>J'ai donc conçu pour vous cette application pour que vos puissiez avoir la météo près de chez vous</Text>
            </View>
        )
    }

}