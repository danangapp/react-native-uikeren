/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Centers from 'react-native-uikeren/centers';

export default class Buttons extends Component {
  render() {
    const { text, key, onPress, flex, style, ...rest } = this.props;
    return (
      <TouchableOpacity key={key || null} style={[s.container, { flex: flex ? 1 : 0 }, style]} onPress={onPress} {...rest}>
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
