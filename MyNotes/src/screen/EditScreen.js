import {View, Text, TextInput, StyleSheet, ScrollView} from 'react-native';
import React, {useState, useRoute} from 'react';
import GlobalStyle from '../utils/GlobalStyle';
import CustomButton from '../components/CustomButton';

export default class EditScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: props.route.params.index,
      id: props.route.params.user.id,
      email: props.route.params.user.email,
      firstName: props.route.params.user.first_name,
      lastName: props.route.params.user.last_name,
    };
  }

  goBack() {
    const {navigation} = this.props;
    const user = {
      id: this.state.id,
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
    };

    navigation.navigate('Users', {
      user: user,
      index: this.state.index,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.label}>id</Text>
          <TextInput
            style={GlobalStyle.TextFieldDisabled}
            value={String(this.state.id)}
            editable={false}
            selectTextOnFocus={false}
          />
          <Text style={styles.label}>Email</Text>
          <TextInput
            style={GlobalStyle.TextFieldDisabled}
            value={this.state.email}
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
              this.goBack();
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
  },
  label: {
    fontSize: 16,
    marginHorizontal: 16,
    marginTop: 16,
  },
});
