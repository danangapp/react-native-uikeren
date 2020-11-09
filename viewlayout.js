/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default class ViewLayout extends Component {
  render() {
    const { style, padding, type, width, flex, color, ...rest } = this.props;
    var positions, defaults, x = width || 100;
    defaults = <View style={[style]} {...rest} />;
    if (type) {
      if (type == 'top-left') {
        posi = <View style={[{ flex: 1, justifyContent: 'flex-start' }, style]} {...rest} />
      } else if (type == 'top-center') {
        positions = <View style={[{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }, style]} {...rest} />
      } else if (type == 'top-right') {
        positions = <View style={[{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end' }, style]} {...rest} />
      } else if (type == 'center-left') {
        positions = <View style={[{ flex: 1, justifyContent: 'center' }, style]} {...rest} />
      } else if (type == 'center-center') {
        positions = <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'center', flex: 1 }, style]} {...rest} />
      } else if (type == 'center-right') {
        positions = <View style={[{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', flex: 1 }, style]} {...rest} />
      } else if (type == 'bottom-left') {
        positions = <View style={[{ flex: 1, justifyContent: 'flex-end' }, style]} {...rest} />
      } else if (type == 'bottom-center') {
        positions = <View style={[{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }, style]} {...rest} />
      } else if (type == 'bottom-right') {
        positions = <View style={[{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }, style]} {...rest} />
      } else if (type == 'col-around') {
        positions = <View style={[{ flex: 1, justifyContent: 'space-around' }, style]} {...rest} />
      } else if (type == 'col-between') {
        positions = <View style={[{ flex: 1, justifyContent: 'space-between' }, style]} {...rest} />
      } else if (type == 'row-around') {
        positions = <View style={[{ justifyContent: 'space-around', flexDirection: 'row' }, style]} {...rest} />
      } else if (type == 'row-between') {
        positions = <View style={[{ justifyContent: 'space-between', flexDirection: 'row' }, style]} {...rest} />
      } else if (type == 'center') {
        positions = <View style={[{ alignItems: 'center' }, style]} {...rest} />
      } else if (type == 'right') {
        positions = <View style={[{ alignItems: 'flex-end' }, style]} {...rest} />
      } else if (type == 'wrap') {
        positions = <View style={[{ flexWrap: 'wrap', flexDirection: 'row' }, style]} {...rest} />
      } else if (type == 'wrap-center') {
        positions = <View style={[{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }, style]} {...rest} />
      } else if (type == 'absolute') {
        positions = <View style={[{ position: 'absolute' }, style]} {...rest} />
      } else if (type == 'absolute-center') {
        positions = <View style={[{ position: 'absolute', alignSelf: 'center' }, style]} {...rest} />
      } else if (type == 'absolute-loading') {
        positions = <View style={[{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }, style]} {...rest} />
      } else if (type == 'row') {
        positions = <View style={[{ flexDirection: 'row' }, style]} {...rest} />
      } else if (type == 'circle') {
        positions = <View style={[{ width: x, height: x, borderRadius: x / 2, backgroundColor: color || 'gray', alignItems: 'center', justifyContent: 'center' }, style]} {...rest} />
      } else if (type == 'oval') {
        positions = <View style={[{ width: x, height: x, borderRadius: x / 8, backgroundColor: color || 'gray', alignItems: 'center', justifyContent: 'center' }, style]} {...rest} />
      } else if (type == 'box') {
        positions = <View style={[{ width: x, height: x, backgroundColor: color || 'gray', alignItems: 'center', justifyContent: 'center' }, style]} {...rest} />
      } else if (type == 'flex') {
        positions = <View style={[{ flex: flex }, style]} {...rest} />
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
