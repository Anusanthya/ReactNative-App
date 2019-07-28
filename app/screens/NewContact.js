import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class NewContact extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' }}>
                <Text>NewContact Screen</Text>
            </View>
        )
    }
}