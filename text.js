/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text } from 'react-native';

class Texts extends Component {
  render() {
    const { marginLeft, marginRight, marginTop, marginBottom, paddingLeft, paddingRight, paddingTop, paddingBottom, backgroundColor, margin, padding, textAlign, marginHorizontal, marginVertical, paddingHorizontal, paddingVertical } = this.props;
    var st;

    const { style, color, size, fontWeight, H1, H2, H3, ...rest } = this.props;
    var styles;

    if (marginLeft) {
      styles = { ...styles, marginLeft }
    }
    if (marginRight) {
      styles = { ...styles, marginRight }
    }
    if (marginTop) {
      styles = { ...styles, marginTop }
    }
    if (marginBottom) {
      styles = { ...styles, marginBottom }
    }
    if (paddingLeft) {
      styles = { ...styles, paddingLeft }
    }
    if (paddingRight) {
      styles = { ...styles, paddingRight }
    }
    if (paddingTop) {
      styles = { ...styles, paddingTop }
    }
    if (paddingBottom) {
      styles = { ...styles, paddingBottom }
    }
    if (backgroundColor) {
      styles = { ...styles, backgroundColor }
    }
    if (margin) {
      styles = { ...styles, margin }
    }
    if (marginHorizontal) {
      styles = { ...styles, marginHorizontal }
    }
    if (marginVertical) {
      styles = { ...styles, marginVertical }
    }
    if (padding) {
      styles = { ...styles, padding }
    }
    if (textAlign) {
      styles = { ...styles, textAlign }
    }
    if (color) {
      styles = { ...styles, color }
    }
    if (fontWeight) {
      styles = { ...styles, fontWeight }
    }
    if (size) {
      styles = { ...styles, fontSize: size }
    }

    if (H1) {
      styles = { ...styles, fontSize: 32, ...style }
    }

    if (H2) {
      styles = { ...styles, fontSize: 24, ...style }
    }

    if (H3) {
      styles = { ...styles, fontSize: 20, ...style }
    }

    console.log(styles)
    return (
      <Text style={styles} {...rest} />
    );
  }
}

export default Texts;