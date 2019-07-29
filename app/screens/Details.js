import React, { Component } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Header, Actions } from '../components/UserDetails';
import colors from '../config/colors';
import { capitalizeFirstLetter } from '../helpers/string';

export default class Details extends Component {
    render() {
        let navParams = this.props.navigation.state.params;
        const name = `${capitalizeFirstLetter(navParams.name.first)}  ${capitalizeFirstLetter(navParams.name.last)}`;
        return (
            <ScrollView style={{backgroundColor: colors.background }}>
                <Header {...navParams} />
                <Actions {...navParams}/>
            </ScrollView>
        )
    }
}