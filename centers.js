/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Centers extends Component {
  render() {
    const { style, just, ...rest } = this.props;
    return (
      <View style={[s.container, style, { justifyContent: just ? 'center' : 'flex-start', flex: just ? 1 : 0 }]} {...rest} />
    );
  }
}

export default Centers;

var s = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
