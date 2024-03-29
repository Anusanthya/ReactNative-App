import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { contacts } from '../config/data';
import colors from '../config/colors';
import ListItemComponent from '../components/ListItem/ListItem';

export default class Contacts extends Component {
    _keyExtractor = (item, index) => item.login ? item.login.username : '';
    
    onPress = (item) => {
        this.props.navigation.navigate('Details', item)
    };
    
    render() {
        return (
                <FlatList
                style={{ backgroundColor: colors.background }}
                data={contacts}
                keyExtractor={this._keyExtractor}
                renderItem={({ item }) => <ListItemComponent {...item} onPress={() => this.onPress(item)} />}
                />
        )
    }
}