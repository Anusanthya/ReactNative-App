import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Me extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: 'yellow' }}>
                <Text>Me Screen</Text>
            </View>
        )
    }
}