// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native'; //destructured import
import Header from './src/components/header';

// create a component (uses jsx)
const App = () => (
    <Header /> //nested component
  );

//render component to the device
//every reactnative app always requires at least one registered component
//first arg: application name, should match project name
//second arg: returns first component to render
AppRegistry.registerComponent('albums', () => App);
