// import libary
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

//create component (functional)
//takes onPress prop from parent to keep functionality general
const Button = ({ onPress }) => {
  //destructured props
  const { textStyle, buttonStyle } = styles;

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>
        BUY
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1,
    alignSelf: 'stretch', //stretch to fill flex container
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

// export component for rest of app
export default Button;
