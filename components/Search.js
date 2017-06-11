import React from 'react';
import {View, TextInput, Image, Button} from'react-native';
import style from '../Style';

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
            <View>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setCity(text)}
                    style={style.input}
                    value={this.state.city}
                />
                <Button style={style.button} color="#a2273c" onPress={() => this.submit()} title="Rechercher une ville"/>
            </View>
        )
    }

}