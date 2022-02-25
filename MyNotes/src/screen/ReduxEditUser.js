import {
  Text,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  TextInput,
} from 'react-native';
import React, {Component} from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import CustomButton from '../components/CustomButton';
import {connect} from 'react-redux';
import saveUserDetails from '../redux/actions';

class ReduxEditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: this.props.user.firstName,
      lastName: this.props.user.lastName,
    };
  }

  onTapBtnUpdate() {
    const {navigation} = this.props;
    var user = {};
    user.id = this.props.user.id;
    user.email = this.props.user.email;
    user.firstName = this.state.firstName;
    user.lastName = this.state.lastName;
    this.props.reduxSaveUser(user);
    navigation.goBack();
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle={'dark-content'} />
        <ScrollView>
          <Text style={styles.label}>id</Text>
          <TextInput
            style={GlobalStyle.TextFieldDisabled}
            value={String(this.props.user.id)}
            editable={false}
            selectTextOnFocus={false}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={GlobalStyle.TextFieldDisabled}
            value={this.props.user.email}
            editable={false}
            selectTextOnFocus={false}
          />
          <Text style={styles.label}>First Name</Text>
          <TextInput
            style={GlobalStyle.TextFiledTitle}
            onChangeText={text => {
              this.setState({firstName: text});
            }}
            placeholder={'Enter First Name'}
            value={this.state.firstName}
          />
          <Text style={styles.label}>Last Name</Text>
          <TextInput
            style={GlobalStyle.TextFiledTitle}
            onChangeText={text => {
              this.setState({lastName: text});
            }}
            placeholder={'Enter Last Name'}
            value={this.state.lastName}
          />
          <CustomButton
            isEnabled="True"
            title="Update"
            onTapBtn={() => {
              this.onTapBtnUpdate();
            }}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
});

const mapStateToProps = state => {
  return {
    user: state.userReducer.user,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    reduxSaveUser: user => dispatch(saveUserDetails(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxEditUser);
