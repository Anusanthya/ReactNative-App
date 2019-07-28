import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
// import Contacts from './screens/Contacts';
import { Screens, Root } from './config/router';

const AppNavigator = createStackNavigator(Screens, Root);

const AppContainer = createAppContainer(AppNavigator);

const App = () => {
    return <AppContainer />;
}

export default App;