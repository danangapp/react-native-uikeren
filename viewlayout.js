/* eslint-disable no-dupe-keys */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

export default class ViewLayout extends Component {
  render() {
    const { style, padding, margin, type, width, height, flex, color, ...rest } = this.props;
    const { SAV, SV, TopLeft, TopCenter, TopRight, CenterLeft, CenterCenter, CenterRight,
      BottomLeft, BottomCenter, BottomRight, ColAround, ColBetween, ColCenter,
      RowAround, RowBetween, Center, Right, Wrap, WrapCenter, WrapRight, Absolute,
      AbsoluteCenter, AbsoluteRight, Row, Circle, Oval,
      Box, Flex, Divider, Container, size, onPress } = this.props;

    var st = { margin, padding, marginLeft, marginRight, marginTop, marginBottom, paddingLeft, paddingRight, paddingTop, paddingBottom, width, height, backgroundColor, size };
    const { marginLeft, marginRight, marginTop, marginBottom, paddingLeft, paddingRight, paddingTop, paddingBottom, backgroundColor } = this.props;
    var positions, x = size || 50, styles, tops, centers, bottoms;


    if (Absolute) {
      styles = { ...st, position: 'absolute' };
    }

    if (AbsoluteCenter) {
      styles = { ...st, position: 'absolute', alignSelf: 'center' };
    }

    if (AbsoluteRight) {
      styles = { ...st, position: 'absolute', alignSelf: 'flex-end' };
    }

    if (Circle) {
      styles = { ...st, width: x, height: x, borderRadius: x / 2, backgroundColor: color || 'gray', alignItems: 'center', justifyContent: 'center' };
    }

    if (Oval) {
      styles = { ...st, width: x, height: x, borderRadius: x / 8, backgroundColor: color || 'gray', alignItems: 'center', justifyContent: 'center' };
    }

    if (Box) {
      styles = { ...st, width: x, height: x, backgroundColor: color || 'gray', alignItems: 'center', justifyContent: 'center' };
    }

    if (Flex) {
      styles = { ...st, flex: 1 };
    }

    if (Container) {
      styles = { ...st, padding: 10 };
    }

    tops = { flex: 1, justifyContent: 'flex-start' };
    if (TopLeft) {
      styles = { ...st, ...tops, alignItems: 'flex-start' };
    }

    if (TopCenter) {
      styles = { ...st, ...tops, alignItems: 'center' };
    }

    if (TopRight) {
      styles = { ...st, ...tops, alignItems: 'flex-end' };
    }

    centers = { flex: 1, justifyContent: 'center' };
    if (CenterLeft) {
      styles = { ...st, ...centers };
    }

    if (CenterCenter) {
      styles = { ...st, ...centers, alignItems: 'center' };
    }

    if (CenterRight) {
      styles = { ...st, ...centers, alignItems: 'flex-end' };
    }

    bottoms = { flex: 1, justifyContent: 'flex-end' };
    if (BottomLeft) {
      styles = { ...st, ...bottoms };
    }

    if (BottomCenter) {
      styles = { ...st, ...bottoms, alignItems: 'center' };
    }

    if (BottomRight) {
      styles = { ...st, ...bottoms, alignItems: 'flex-end' };
    }

    if (ColAround) {
      styles = { ...st, flex: 1, justifyContent: 'space-around' };
    }

    if (ColCenter) {
      styles = { ...st, justifyContent: 'center' };
    }

    if (ColBetween) {
      styles = { ...st, flex: 1, justifyContent: 'space-between' };
    }

    if (RowAround) {
      styles = { ...st, justifyContent: 'space-around', flexDirection: 'row' };
    }

    if (RowBetween) {
      styles = { ...st, justifyContent: 'space-between', flexDirection: 'row' };
    }

    if (Center) {
      styles = { ...st, alignItems: 'center' };
    }

    if (Right) {
      styles = { ...st, alignItems: 'flex-end' };
    }

    if (Wrap) {
      styles = { ...st, flexWrap: 'wrap', flexDirection: 'row' };
    }

    if (WrapCenter) {
      styles = { ...st, alignItems: 'center', justifyContent: 'center', flexDirection: 'row', flexWrap: 'wrap' };
    }

    if (WrapRight) {
      styles = { ...st, alignItems: 'flex-end', justifyContent: 'flex-end', flexDirection: 'row', flexWrap: 'wrap' };
    }

    if (Row) {
      styles = { ...st, flexDirection: 'row' };
    }

    if (Divider) {
      styles = { ...st, width: '100%', height: 0.5, marginVertical: 10, backgroundColor: color || 'black' };
    }

    styles = { ...style, ...styles };


    if (SAV) {
      positions = <SafeAreaView style={styles} {...rest} />;
    } else if (SV) {
      positions = <ScrollView style={styles} {...rest} />;
    } else if (onPress) {
      positions = <TouchableOpacity style={styles} {...rest} />;
    } else {
      positions = <View style={styles} {...rest} />;
    }


    return positions;
  }
}
