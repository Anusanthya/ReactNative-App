import React from 'react';
import Contacts from '../screens/Contacts';
import Details from '../screens/Details';
import { capitalizeFirstLetter } from '../helpers/string';
import { LeftDrawerButton } from '../index';

export const Screens = {
    Contacts: {
        screen: Contacts,
        navigationOptions: (props) => ({
            title: 'Contacts',
            headerLeft: <LeftDrawerButton {...props} />,
        })
    },
    Details: {
        screen: Details,
        navigationOptions: ({ navigation }) => {
        return {
            title: `${capitalizeFirstLetter(navigation.state.params.name.first)} ${capitalizeFirstLetter(navigation.state.params.name.last)}`
        }
        }
    }
};

export const Root = {
    initialRouteName: 'Contacts'
}