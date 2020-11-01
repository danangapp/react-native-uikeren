/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Wrap extends Component {
  render() {
    const { style, ...rest } = this.props;
    return (
      <View style={[s.container, style]} {...rest} />
    );
  }
}

export default Wrap;

var s = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
});
