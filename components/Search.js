import React from 'react';
import {View, TextInput, Image, Button, Keyboard} from'react-native';
import style from '../Style';
import {StackNavigator} from "react-navigation";
import List from "./List";


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
            city: ''
        }
    }

    setCity(city) {
        this.setState({city})
    }

    submit() {
        Keyboard.dismiss();
        this.props.navigation.navigate('Result', {city: this.state.city});
    }

    render() {
        return (
            <View style={style.container}>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setCity(text)}
                    onSubmitEditing={(text) => this.submit(text)}
                    style={style.input}
                    value={this.state.city}
                />
                <Button style={style.button} color="#a2273c" onPress={() => this.submit()}
                        title="Rechercher une ville"/>
            </View>
        )
    }

}

const navigationOptions = {
    headerStyle: style.header,
    headerTitleStyle: style.headerTitle
};

export default StackNavigator({
    Search: {
        screen: Search,
        navigationOptions
    },
    Result: {
        screen: List,
        navigationOptions
    }
});