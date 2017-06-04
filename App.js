import React from 'react';
import Search from './components/Search';
import About from './components/About';
import {View} from'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View style={{margin: 20}}>
                <Search />
            </View>
        );
    }
}