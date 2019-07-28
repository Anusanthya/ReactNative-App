import React from 'react';
import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import { capitalizeFirstLetter } from '../helpers/string';

export const Screens = {
    Contacts: {
        screen: Contacts,
        navigationOptions: {
            title: 'Contacts'
        }
    },
    Details: {
        screen: Details,
        navigationOptions: ({ navigation }) => {
        console.log('-- navigation props -- ', navigation.state.params)
        return {
            title: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`
        }
        }
    }
};

export const Root = {
    initialRouteName: 'Contacts'
}