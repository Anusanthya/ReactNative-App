import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Avatar } from 'react-native-elements';
import { Header } from '../components/UserDetails';
import colors from '../config/colors';
import { capitalizeFirstLetter } from '../helpers/string';

export default class Details extends Component {
    render() {
        let navParams = this.props.navigation.state.params;
        const name = `${capitalizeFirstLetter(navParams.name.first)}  ${capitalizeFirstLetter(navParams.name.last)}`;
        return (
            <ScrollView style={{backgroundColor: colors.background }}>
                <Header {...navParams} />
            </ScrollView>
        )
    }
}