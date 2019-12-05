import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Search from './screens/search'
import SearchBody from './screens/searchBody'

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const RootStack = createStackNavigator(
  {
    Search: Search,
    SearchBody: SearchBody
    
    
  },
  {
    initialRouteName: 'Search',
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends Component {

  render() {
    return (

      <AppContainer/>

    );
  }
}

