import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import GlobalStyle from '../utils/GlobalStyle';
import {useSelector, useDispatch} from 'react-redux';
import {setName} from '../redux/actions';
import CustomButton from '../components/CustomButton';
import UITextField from '../components/UITextField';
import axios from 'axios';

export default function LoginScreen({navigation}) {
  const {name} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const url = 'https://reqres.in/api/login';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(true);

  const onTapBtnLogin = () => {
    const payload = {
      email,
      password,
    };
    axios
      .post('https://reqres.in/api/login', {
        email: email,
        password: password,
      })
      .then(function (response) {
        const token = response.data.token;
        console.log(token);
        if (response.status === 200) {
          navigation.navigate('Home');
        } else {
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={[GlobalStyle.CustomFont, styles.text]}>My Todos</Text>
      <UITextField
        placeholder="Enter Email"
        isSecureText={false}
        onChangeText={value => {
          setEmail(value);
        }}
      />
      <UITextField
        placeholder="Enter Password"
        isSecureText={true}
        onChangeText={value => {
          setPassword(value);
        }}
      />

      <CustomButton
        isEnabled="false"
        title="Login"
        onTapBtn={() => {
          // dispatch(setName(name));
          onTapBtnLogin();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});
