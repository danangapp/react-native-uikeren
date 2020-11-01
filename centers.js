/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Centers extends Component {
  render() {
    const { style, just, ...rest } = this.props;
    console.log(just);
    return (
      <View style={[s.container, style, { justifyContent: just ? 'center' : 'flex-start' }]} {...rest} />
    );
  }
}

export default Centers;

var s = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});
