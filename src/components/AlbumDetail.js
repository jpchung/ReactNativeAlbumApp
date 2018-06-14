// import library to create component
import React from 'react';
import { View, Text } from 'react-native';

// create compoent (functional) - only shows data
//passed prop from parent component
const AlbumDetail = (props) => {
  return (
    <View>
      <Text>{props.album.title}</Text>
    </View>
  );
};


// make component available to other parts of app
export default AlbumDetail;
