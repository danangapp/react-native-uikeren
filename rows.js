/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Rows extends Component {
  render() {
    return (
      <View style={s.container} {...this.props} />
    );
  }
}

export default Rows;

var s = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});
