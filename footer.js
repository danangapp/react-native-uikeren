/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Footer extends Component {
  render() {
    return (
      <View style={s.container}>
        <View {...this.props} style={s.child} />
      </View>
    );
  }
}

export default Footer;

var s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  child: {
    minHeight: 50,
    flexDirection: 'row',
  },
});
