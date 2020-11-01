/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Divider extends Component {
  render() {
    const { color } = this.props;
    return (
      <View style={[s.divider, { backgroundColor: color || 'black' }]} />
    );
  }
}

export default Divider;

var s = StyleSheet.create({
  divider: {
    height: 2,
    marginVertical: 10,
  },
});
