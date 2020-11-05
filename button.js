/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Centers from 'react-native-uikeren/centers';

export default class Buttons extends Component {
  render() {
    const { text, onPress } = this.props;
    return (
      <TouchableOpacity style={s.container} onPress={onPress}>
        <Centers>
          <Text>{text}</Text>
        </Centers>
      </TouchableOpacity>
    );
  }
}


var s = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
  }
});
