import {Text, View, StyleSheet} from 'react-native';
import React, {Component} from 'react';
import CustomButton from '../../components/CustomButton';
import UITextField from '../../components/UITextField';
import GlobalStyle from '../../utils/GlobalStyle';
import {connect} from 'react-redux';
import loginUser from '../Login/actions';

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  onTapBtnLogin = () => {
    // let email = this.state.email;
    // let password = this.state.password;
    let email = 'eve.holt@reqres.in';
    let password = 'cityslicka';
    let data = {email, password};

    this.props.dispatch(loginUser(data));
  };

  updateUI() {
    if (this.props.users.length > 0) {
      this.props.navigation.navigate('Users');
    }
  }

  render() {
    this.updateUI();
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={[GlobalStyle.CustomFont, styles.text]}>My Todos</Text>

        <UITextField
          placeholder="Enter Email"
          isSecureText={false}
          onChangeText={value => {
            this.state.email = value;
          }}
        />
        <UITextField
          placeholder="Enter Password"
          isSecureText={true}
          onChangeText={value => {
            this.state.password = value;
          }}
        />

        <CustomButton
          isEnabled="false"
          title="Login"
          onTapBtn={() => {
            this.onTapBtnLogin();
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  },
});

const mapStateToProps = state => ({
  users: state.authReducer.user,
});

export default connect(mapStateToProps, null)(Login);
