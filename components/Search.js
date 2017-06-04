import React from 'react';
import {View, TextInput, StyleSheet} from'react-native';

export default class Home extends React.Component {

    render() {
        return (
            <View>
                <TextInput
                    underlineColorAndroid='transparent'
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                />
            </View>
        )
    }

}