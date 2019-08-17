import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createDrawerNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';
import { Screens, Root } from './config/router';
import NewContact from './screens/NewContact';
import Me from './screens/Me';
import { DrawerButton } from './components/Header';

export const LeftDrawerButton = ({ navigation }) => {
    if (Platform.OS === 'android') {
        return <DrawerButton onPress={() => navigation.openDrawer()} />
    };
    return null;
};

const AppNavigator = createStackNavigator(Screens, Root);

export const NewContactStack = createStackNavigator({
    NewContact: {
        screen: NewContact,
        navigationOptions: (props) => ({
            headerTitle: 'New Contact',
            headerLeft: <LeftDrawerButton {...props} />,
        })
    }
});

export const MeStack = createStackNavigator({
    Me: {
        screen: Me,
        navigationOptions: (props) => ({
            headerTitle: 'Me',
            headerLeft: <LeftDrawerButton {...props} />,
        }),
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
});

export const Drawer = createDrawerNavigator({
    Contacts: {
        screen: AppNavigator,
        navigationOptions: {
            drawerLabel: 'Contacts',
        }
    },
    NewContact: {
        screen: NewContactStack,
        navigationOptions: {
            drawerLabel: 'New Contact',
        }
    },
    Me: {
        screen: MeStack,
        navigationOptions: {
            drawerLabel: 'Me',
        }
    }
});

const TabsOrDrawer = Platform.OS == 'ios' ? Tabs : Drawer;

const AppContainer = createAppContainer(TabsOrDrawer);

const App = () => {
    return <AppContainer />;
}

export default App;