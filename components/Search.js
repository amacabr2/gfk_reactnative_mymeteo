import React from 'react';
import {View, TextInput, StyleSheet} from'react-native';

export default class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: 'Paris'
        }
    }

    setCity(city) {
        this.setState({city})
    }

    render() {
        return (
            <View>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setCity(text)}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                />
            </View>
        )
    }

}