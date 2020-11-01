/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Rights extends Component {
  render() {
    const { style, ...rest } = this.props;
    return (
      <View style={[s.container, style]} {...rest} />
    );
  }
}

export default Rights;

var s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-end',
  },
});
