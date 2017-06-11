import React from 'react';
import {ActivityIndicator, ListView, Text, View} from "react-native";
import style from '../Style';
import axios from 'axios';
import Row from "./Row";

export default class List extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            //title: `Météo / ${navigation.state.params.city}`
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            city: 'Paris',
            //this.props.navigation.state.params.city,
            report: null
        };
        this.fetchWeather();
    }

    fetchWeather() {
        let appid = "555f2a1d504b2f6eeae38744267aef59";
        let url = `http://api.openweathermap.org/data/2.5/forecast/daily?q=${this.state.city}&appid=${appid}&units=metric`;
        axios.get(url).then((response) => {
            this.setState({report: response.data})
        });
    }

    render() {
        if (this.state.report === null) {
            return (
              <ActivityIndicator color={style.color} size="large"/>
            );
        } else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return (
                <View>
                    <ListView
                        dataSource={ds.cloneWithRows(this.state.report.list)}
                        renderRow={(row, j, k) => <Row day={row} index={parseInt(k, 10)} />}
                    />
                </View>
            );
        }

    }
}