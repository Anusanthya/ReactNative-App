import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { me } from '../config/data';
import { Header, Actions, Info } from '../components/UserDetails';
import colors from '../config/colors';
import { PrimaryButton } from '../components/Buttons';

export default class Me extends Component {
    render() {
        return (
            <ScrollView style={{ backgroundColor: colors.background }}>
                <Header {...me} />
                <PrimaryButton label='Edit Profile' onPress={() => null} />
                <Actions {...me} />
                <Info {...me} />
            </ScrollView>
        )
    }
}