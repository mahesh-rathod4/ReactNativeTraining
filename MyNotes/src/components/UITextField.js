import React from 'react';
import {TextInput} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';

const UITextField = props => {
  return (
    <TextInput
      secureTextEntry={props.isSecureText}
      style={GlobalStyle.TextFiledTitle}
      onChangeText={text => props.onChangeText(text)}
      placeholder={props.placeholder}
    />
  );
};

export default UITextField;
