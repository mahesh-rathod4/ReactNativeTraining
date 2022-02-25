import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

const UserCell = props => {
  return (
    <View style={styles.bg}>
      <Text style={styles.heading}>Email: {props.email}</Text>
      <Text style={styles.Subheading}>Name: {props.name}</Text>
      <View>
        <TouchableOpacity onPress={props.onTapBtn}>
          <Text style={styles.text}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    padding: 16,
    color: '#336092',
  },
  bg: {
    marginHorizontal: 16,
    marginVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#171717',
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  heading: {
    marginTop: 16,
    marginHorizontal: 16,
  },
  Subheading: {
    marginTop: 4,
    marginHorizontal: 16,
  },
});
export default UserCell;
