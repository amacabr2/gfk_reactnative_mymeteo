import React from 'react';
import {View, TextInput, StyleSheet, Image} from'react-native';

export default class Home extends React.Component {

    static navigationOptions = {
        tabBarIcon: () => {
            return <Image source={require('./icons/home.png')} style={{width: 30, height: 30}}/>
        }
    };


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
            <View style={{margin: 20}}>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setCity(text)}
                    style={{height: 40, borderColor: 'gray', borderWidth: 1}}
                    value={this.state.city}
                />
            </View>
        )
    }

}