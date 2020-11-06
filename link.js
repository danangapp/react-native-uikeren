/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Centers from 'react-native-uikeren/centers';

export default class Link extends Component {
  render() {
    const { text, margin, color, onPress } = this.props;
    return (
      <TouchableOpacity style={{ marginVertical: margin ? 10 : 0 }} onPress={onPress}>
        <Text style={{ color: color || 'gray' }}>{text}</Text>
      </TouchableOpacity>
    );
  }
}


var s = StyleSheet.create({

});
