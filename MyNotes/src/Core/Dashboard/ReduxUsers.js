import {Text, StyleSheet, View, StatusBar, FlatList} from 'react-native';
import React, {Component} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import UserCell from '../../components/UsersCell';
import saveUserDetails from '../../redux/actions';
import {connect} from 'react-redux';
import {loadUsers} from '../Dashboard/action';

class ReduxUsers extends Component {
  componentDidMount() {
    this.props.loadUsers();
  }

  onTapBtnEdit(index) {
    var user = {};
    user.id = this.props.data[index].id;
    user.email = this.props.data[index].email;
    user.firstName = this.props.data[index].first_name;
    user.lastName = this.props.data[index].last_name;
    this.props.reduxSaveUser(user);
    this.props.navigation.navigate('ReduxEditUser');
  }

  updateUI() {
    if (this.props.user != undefined) {
      let user = this.props.user;
      for (let i = 0; i < this.props.data.length; i++) {
        if (this.props.data[i].id === user.id) {
          this.props.data[i].first_name = user.firstName;
          this.props.data[i].last_name = user.lastName;
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
          data={this.props.data}
          keyExtractor={({id}, index) => id}
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

const mapStateToProps = state => ({
  user: state.userReducer.user,
  data: state.reduxSagaReducer.data,
  loading: state.reduxSagaReducer.loading,
  error: state.reduxSagaReducer.error,
});

const mapDispatchToProps = dispatch => ({
  reduxSaveUser: user => dispatch(saveUserDetails(user)),
  loadUsers,
});

export default connect(mapStateToProps, mapDispatchToProps)(ReduxUsers);
