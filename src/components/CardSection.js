// import library to create components
import React from 'react';
import { View } from 'react-native';

// create component (functional) - presentation only
const CardSection = (props) => {
  //takes AlbumDmDetail child component as props.children
  return (
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    flexDirection: 'row', //specifies direction for justifyContent (default: column)
    justifyContent: 'flex-start', //start in corner of container
    borderColor: '#ddd',
    position: 'relative'
  }
};

//make component available to other parts of app
export default CardSection;
