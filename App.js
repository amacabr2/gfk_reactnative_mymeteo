import React from 'react';
import {StatusBar, View} from'react-native';
import {TabNavigator} from 'react-navigation';
import Search from './components/Search';
import About from './components/About';

const Tabs = TabNavigator({
    Search: {screen: Search},
    About: {screen: About}
}, {
    tabBarPosition: 'bottom',
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        indicatorStyle: {
            height: 2,
            backgroundColor: '#ffffff'
        },
        pressColor: "#27ae60",
        style: {
            backgroundColor: "#a2273c",
            borderTopWidth: 1,
            borderColor: "#5d1824"
        }
    }
});

export default class App extends React.Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <StatusBar hidden={true}/>
                <Tabs />
            </View>
        );
    }
}