/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

class Centers extends Component {
  render() {
    const { style, just, noalign, ...rest } = this.props;
    if (noalign) {
      return (
        <View style={[{ justifyContent: just ? 'center' : 'flex-start', flex: just ? 1 : 0 }, style]} {...rest} />
      );
    } else {
      return (
        <View style={[{ alignItems: 'center', justifyContent: just ? 'center' : 'flex-start', flex: just ? 1 : 0 }, style]} {...rest} />
      );
    }
  }
}

export default Centers;
