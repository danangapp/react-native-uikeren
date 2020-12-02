/* eslint-disable no-dupe-keys */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

export default class ViewLayout extends Component {
  render() {
    const { style, padding, margin, type, width, height, flex, color, ...rest } = this.props;
    const { TopLeft, TopCenter, TopRight, CenterLeft, CenterCenter, CenterRight,
      BottomLeft, BottomCenter, BottomRight, ColAround, ColBetween,
      RowAround, RowBetween, Center, Right, Wrap, WrapCenter, Absolute,
      AbsoluteCenter, AbsoluteLoading, Row, Circle, Oval,
      Box, Flex, Divider, Container } = this.props;
    var positions, defaults, x = width || 100;

    const { marginLeft, marginRight, marginTop, marginBottom, paddingLeft, paddingRight, paddingTop, paddingBottom, backgroundColor } = this.props;
    var st = { margin, padding, marginLeft, marginRight, marginTop, marginBottom, paddingLeft, paddingRight, paddingTop, paddingBottom, width, height, backgroundColor };

    defaults = <View style={[st, style]} {...rest} />;
    positions = defaults;

    if (TopLeft) {
      positions = <View style={[st, { flex: 1, justifyContent: 'flex-start' }, style]} {...rest} />;
    } else if (TopCenter) {
      positions = <View style={[st, { flex: 1, justifyContent: 'flex-start', alignItems: 'center' }, style]} {...rest} />;
    } else if (TopRight) {
      positions = <View style={[st, { flex: 1, justifyContent: 'flex-start', alignItems: 'flex-end' }, style]} {...rest} />;
    } else if (CenterLeft) {
      positions = <View style={[st, { flex: 1, justifyContent: 'center' }, style]} {...rest} />;
    } else if (CenterCenter) {
      positions = <View style={[st, { flex: 1, justifyContent: 'center', alignItems: 'center', flex: 1 }, style]} {...rest} />;
    } else if (CenterRight) {
      positions = <View style={[st, { flex: 1, justifyContent: 'center', alignItems: 'flex-end', flex: 1 }, style]} {...rest} />;
    } else if (BottomLeft) {
      positions = <View style={[st, { flex: 1, justifyContent: 'flex-end' }, style]} {...rest} />;
    } else if (BottomCenter) {
      positions = <View style={[st, { flex: 1, justifyContent: 'flex-end', alignItems: 'center' }, style]} {...rest} />;
    } else if (BottomRight) {
      positions = <View style={[st, { flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }, style]} {...rest} />;
    } else if (ColAround) {
      positions = <View style={[st, { flex: 1, justifyContent: 'space-around' }, style]} {...rest} />;
    } else if (ColBetween) {
      positions = <View style={[st, { flex: 1, justifyContent: 'space-between' }, style]} {...rest} />;
    } else if (RowAround) {
      positions = <View style={[st, { justifyContent: 'space-around', flexDirection: 'row' }, style]} {...rest} />;
    } else if (RowBetween) {
      positions = <View style={[st, { justifyContent: 'space-between', flexDirection: 'row' }, style]} {...rest} />;
    } else if (Center) {
      positions = <View style={[st, { alignItems: 'center' }, style]} {...rest} />;
    } else if (Right) {
      positions = <View style={[st, { alignItems: 'flex-end' }, style]} {...rest} />;
    } else if (Wrap) {
      positions = <View style={[st, { flexWrap: 'wrap', flexDirection: 'row' }, style]} {...rest} />;
    } else if (WrapCenter) {
      positions = <View style={[st, { alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' }, style]} {...rest} />;
    } else if (Absolute) {
      positions = <View style={[st, { position: 'absolute' }, style]} {...rest} />;
    } else if (AbsoluteCenter) {
      positions = <View style={[st, { position: 'absolute', alignSelf: 'center' }, style]} {...rest} />;
    } else if (AbsoluteLoading) {
      positions = <View style={[st, { position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }, style]} {...rest} />;
    } else if (Row) {
      positions = <View style={[st, { flexDirection: 'row' }, style]} {...rest} />;
    } else if (Circle) {
      positions = <View style={[st, { width: x, height: x, borderRadius: x / 2, backgroundColor: color || 'gray', alignItems: 'center', justifyContent: 'center' }, style]} {...rest} />;
    } else if (Oval) {
      positions = <View style={[st, { width: x, height: x, borderRadius: x / 8, backgroundColor: color || 'gray', alignItems: 'center', justifyContent: 'center' }, style]} {...rest} />;
    } else if (Box) {
      positions = <View style={[st, { width: x, height: x, backgroundColor: color || 'gray', alignItems: 'center', justifyContent: 'center' }, style]} {...rest} />;
    } else if (Flex) {
      positions = <View style={[st, { flex: flex }, style]} {...rest} />;
    } else if (Divider) {
      positions = <View style={[st, { width: '100%', height: 0.5, marginVertical: 10, backgroundColor: color || 'black' }, style]} {...rest} />;
    } else if (Container) {
      positions = <View style={[st, { padding: 10 }, style]} {...rest} />;
    }

    return positions;
  }
}
