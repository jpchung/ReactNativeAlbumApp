// import library to create component
import React from 'react';
import { Text, View } from 'react-native';

// create component (functional)
const Header = (props) => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};

// reactnative styles usually camelCase versions of css
const styles = {
  viewStyle: {
    backgroundColor: '#F8F8F8',
    justifyContent: 'center', //vertical flexbox alignment
    alignItems: 'center', //horizontal flexbox alignment
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 20
  }
};

// make component available to other parts of app
export default Header;
