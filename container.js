/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Container extends Component {
  render() {
    const { style, padding, ...rest } = this.props;
    return (
      <View style={[s.container, style, { padding: padding || 10 }]} {...rest} />
    );
  }
}

export default Container;

var s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
