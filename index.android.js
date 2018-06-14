// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native'; //destructured import
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

// create a component (uses jsx), only return one component
const App = () => (
    <View style={{ flex: 1 }}>
      <Header headerText={'Albums'} />
      <AlbumList />
    </View>
  );

//render component to the device
//every reactnative app always requires at least one registered component
//first arg: application name, should match project name
//second arg: returns first component to render
AppRegistry.registerComponent('albums', () => App);
