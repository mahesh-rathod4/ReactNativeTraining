import {Text, StyleSheet, View, StatusBar, FlatList} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import UserCell from '../components/UsersCell';
import saveUserDetails from '../redux/actions';
import {connect} from 'react-redux';

class ReduxUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  fetchUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      this.setState({data: data.data});
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  componentDidMount() {
    this.fetchUsers();
  }

  onTapBtnEdit(index) {
    var user = {};
    user.id = this.state.data[index].id;
    user.email = this.state.data[index].email;
    user.firstName = this.state.data[index].first_name;
    user.lastName = this.state.data[index].last_name;
    this.props.reduxSaveUser(user);
    this.props.navigation.navigate('ReduxEditUser');
  }

  updateUI() {
    if (this.props.user != undefined) {
      let user = this.props.user;
      for (let i = 0; i < this.state.data.length; i++) {
        if (this.state.data[i].id === user.id) {
          this.state.data[i].first_name = user.firstName;
          this.state.data[i].last_name = user.lastName;
        }
      }
    }
  }

  render() {
    this.updateUI();
    return (
      <View style={styles.container}>
        <StatusBar animated={true} barStyle={'dark-content'} />
        <FlatList
          data={this.state.data}
          keyExtractor={({id}, index) => id}
          extraData={this.state}
          renderItem={({item, index}) => (
            <UserCell
              email={item.email}
              name={item.first_name + ' ' + item.last_name}
              url={item.avatar}
              onTapBtn={() => {
                this.onTapBtnEdit(index);
              }}
            />
          )}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(ReduxUsers);
