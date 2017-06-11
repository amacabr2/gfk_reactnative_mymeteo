import React from 'react';
import {Text, View} from "react-native";
import moment from 'moment';

export default class Row extends React.Component {

    static proTypes = {
        day: React.PropTypes.object,
        index: React.PropTypes.number
    };

    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd');
        return (
            <Text>{ day.toUpperCase() }</Text>
        );
    }

    date() {
        let date = moment(this.props.day.dt * 1000).format('DD/MM');
        return (
            <Text>{ date }</Text>
        );
    }

    render() {
        return (
            <View>
                <Text>{this.day()} {this.date()}</Text>
                <Text>{this.props.day.temp.day}°C</Text>
            </View>
        );
    }

}