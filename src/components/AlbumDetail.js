// import library to create component
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// create compoent (functional) - only shows data
//passed prop from parent component
const AlbumDetail = ({ album }) => {
  //destructured props
  const { title, artist, thumbnail_image, image } = album
  const {
    headerContentStyle,
    headerTextStyle,
    thumbnailStyle,
    thumbnailContainerStyle,
    imageStyle
  } = styles;

  //will pass AlbumDetail to Card, CardSection components for styling
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image
            source={{ uri: thumbnail_image }}
            style={thumbnailStyle}
          />
        </View>
        <View style={headerContentStyle}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image
          source={{ uri: image }}
          style={imageStyle}
        />
      </CardSection>
    </Card>
  );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  headerTextStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

// make component available to other parts of app
export default AlbumDetail;
