/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import { Container, Header, Left, Body, Right, Title, View } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Content, Form, Item, Input,Button,Label } from 'native-base';
import React from 'react';
import {Text,} from 'react-native';
import AppNavigator from './AppNavigator';
import { createAppContainer } from 'react-navigation';
const AppContainer = createAppContainer(AppNavigator);

 class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    );
  }
}

export default App

