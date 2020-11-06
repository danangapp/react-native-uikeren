/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Rows extends Component {
  render() {
    const { style, flex, ...rest } = this.props;
    return (
      <View style={[s.container, style, { flex: flex ? 1 : 0 }]} {...rest} />
    );
  }
}

export default Rows;

var s = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});
