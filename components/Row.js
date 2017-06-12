import React from 'react';
import {Text, View, StyleSheet, Image} from "react-native";
import globalStyle from '../Style';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

export default class Row extends React.Component {

    static proTypes = {
        day: React.PropTypes.object,
        index: React.PropTypes.number
    };

    icon(size = 60) {
        let image;
        const type = this.props.day.weather[0].icon;
        switch (type) {
            case '01d':
                image = require('./icons/01d.png');
                break;
            case '02d':
                image = require('./icons/02d.png');
                break;
            case '03d':
                image = require('./icons/03d.png');
                break;
            case '04d':
                image = require('./icons/04d.png');
                break;
            case '09d':
                image = require('./icons/09d.png');
                break;
            case '10d':
                image = require('./icons/10d.png');
                break;
            case '11d':
                image = require('./icons/11d.png');
                break;
            case '13d':
                image = require('./icons/13d.png');
                break;
            case '50d':
                image = require('./icons/50d.png');
                break;
            default:
                image = require('./icons/01d.png');
        }
        return <Image source={image} style={{width: size, height: size}} />
    }

    day() {
        let day = moment(this.props.day.dt * 1000).format('ddd');
        return (
            <Text style={[style.white, style.bold]}>{ day.toUpperCase() }</Text>
        );
    }

    date() {
        let date = moment(this.props.day.dt * 1000).format('DD/MM');
        return (
            <Text>{ date }</Text>
        );
    }

    render() {
        if (this.props.index === 0) {
            return (
                <View style={[style.view, style.flex, style.firstView]}>
                    <View>
                        <Text style={{color: '#ffffff'}}>{this.day()} {this.date()}</Text>
                        {this.icon(120)}
                    </View>
                    <Text style={[style.temp, {fontSize: 35}]}>{Math.round(this.props.day.temp.day)}°C</Text>
                </View>
            );
        } else {
            return (
                <View style={[style.view, style.flex]}>
                    <View style={style.flex}>
                        {this.icon()}
                        <Text style={{marginLeft: 10}}>{this.day()} {this.date()}</Text>
                    </View>
                    <Text style={style.temp}>{Math.round(this.props.day.temp.day)}°C</Text>
                </View>
            );
        }
    }

}

const style = StyleSheet.create({
    white: {
        color: '#ffffff'
    },
    bold: {
      fontWeight: 'bold'
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    view: {
        backgroundColor: '#394163',
        borderWidth: 0,
        borderBottomWidth: 1,
        borderBottomColor: '#202340',
        paddingHorizontal: 20,
        paddingVertical: 10,
        justifyContent: 'space-between'
    },
    firstView: {
       backgroundColor: '#e54b65'
    },
    temp: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 22
    }
});