import React from 'react';
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Screens, Root } from './config/router';
import NewContact from './screens/NewContact';
import Me from './screens/Me';

const AppNavigator = createStackNavigator(Screens, Root);

export const NewContactStack = createStackNavigator({
    NewContact: {
        screen: NewContact,
        navigationOptions: {
            headerTitle: 'New Contact',
        }
    }
});

export const MeStack = createStackNavigator({
    Me: {
        screen: Me,
        navigationOptions: {
            headerTitle: 'Me',
        }
    }
})

const Tabs = createBottomTabNavigator({
    Contacts: {
        screen: AppNavigator,
        navigationOptions: {
            tabBarLabel: 'Contacts',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-list" size={35} color={tintColor} />
        }
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            tabBarLabel: 'NewContacts',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-add" size={35} color={tintColor} />
        }
    },
    Me: {
        screen: MeStack,
        navigationOptions: {
            tabBarLabel: 'Me',
            tabBarIcon: ({ tintColor }) => <Icon name="ios-contact" size={35} color={tintColor} />
        }
    }
})

const AppContainer = createAppContainer(Tabs);

const App = () => {
    return <AppContainer />;
}

export default App;