import React from 'react';
import {View, TextInput, Image, Button} from'react-native';
import style from '../Style';
import {StackNavigator} from "react-navigation";


class Search extends React.Component {

    static navigationOptions = {
        title: 'Rechercher une ville',
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

    submit() {
        this.prop.navigation.navigate('Result', {city: this.state.city});
    }

    render() {
        return (
            <View style={style.container}>
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

export default StackNavigator({
    Search: {
        screen: Search
    },
    Result: {
        screen: Search
    }
});