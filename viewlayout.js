/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class ViewLayout extends Component {
  render() {
    const { style, padding, pos, ...rest } = this.props;
    var positions, defaults;
    defaults = <View style={[style]} {...rest} />;
    if (pos) {
      if (pos == 'top-left') {
        posi = <View style={[{ flex: 1, justifyContent: 'flex-start', alignItems: 'stretch' }, style]} {...rest} />
      } else if (pos == 'top-center') {
        positions = <View style={[{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }, style]} {...rest} />
      } else if (pos == 'top-right') {
        positions = <View style={[{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end' }, style]} {...rest} />
      } else if (pos == 'center-left') {
        positions = <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'stretch' }, style]} {...rest} />
      } else if (pos == 'center-center') {
        positions = <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center', flex: 1 }, style]} {...rest} />
      } else if (pos == 'center-right') {
        positions = <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', flex: 1 }, style]} {...rest} />
      } else if (pos == 'bottom-left') {
        positions = <View style={[{ flex: 1, justifyContent: 'flex-end', alignItems: 'stretch' }, style]} {...rest} />
      } else if (pos == 'bottom-center') {
        positions = <View style={[{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }, style]} {...rest} />
      } else if (pos == 'bottom-right') {
        positions = <View style={[{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }, style]} {...rest} />
      } else if (pos == 'col-around') {
        positions = <View style={[{ flex: 1, justifyContent: 'space-around' }, style]} {...rest} />
      } else if (pos == 'col-between') {
        positions = <View style={[{ flex: 1, justifyContent: 'space-between' }, style]} {...rest} />
      } else if (pos == 'row-around') {
        positions = <View style={[{ justifyContent: 'space-around', flexDirection: 'row' }, style]} {...rest} />
      } else if (pos == 'row-between') {
        positions = <View style={[{ justifyContent: 'space-between', flexDirection: 'row' }, style]} {...rest} />
      } else if (pos == 'center') {
        positions = <View style={[{ alignItems: 'center' }, style]} {...rest} />
      } else if (pos == 'right') {
        positions = <View style={[{ alignItems: 'flex-end' }, style]} {...rest} />
      } else if (pos == 'wrap') {
        positions = <View style={[{ flexWrap: 'wrap', flexDirection: 'row' }, style]} {...rest} />
      } else {
        positions = defaults;
      }
    } else {
      positions = defaults;
    }

    return positions;
  }
}

var s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
