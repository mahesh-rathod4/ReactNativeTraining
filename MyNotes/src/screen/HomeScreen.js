import {Text, StyleSheet, View, FlatList} from 'react-native';
import React, {Component} from 'react';
import CustomButton from '../components/CustomButton';
import UserCell from '../components/UsersCell';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isReload: false,
    };
  }

  componentDidMount() {
    this.fetchUsers();
    this.focusListener = this.props.navigation.addListener('focus', () => {
      if (this.props.route.params !== undefined) {
        const user = this.props.route.params?.user;
        const index = this.props.route.params?.index;
        const tempData = this.state.data;
        tempData[index].first_name = user.firstName;
        tempData[index].last_name = user.lastName;
        this.setState({data: tempData});
      }
    });
  }

  onBack() {
    console.log('fdg');
  }

  fetchUsers = async () => {
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
      this.setState({data: data.data, isReload: false});
    } catch (error) {
      console.error(error);
    } finally {
    }
  };

  render() {
    return (
      <View style={styles.container}>
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
                this.props.navigation.navigate(
                  'Edit User',
                  {user: item, index: index},
                  {
                    onBack: this.onBack.bind(this),
                  },
                );
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
    marginBottom: 20,
  },
});
