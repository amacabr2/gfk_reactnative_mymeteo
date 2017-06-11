import React from 'react';
import {Text} from "react-native";

export default class List extends React.Component {

    static navigationOptions = {
        title: 'Météo /',
    };

    constructor(props) {
        super(props);
        this.state = {
            city: ' ',
            report: null
        }
    }

    render() {
        return (
            <Text>Salut les gens</Text>
        );
    }

}