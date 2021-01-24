/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import Collection from './collection';

class Texts extends Component {
  render() {
    const { marginLeft, marginRight, marginTop, marginBottom, paddingLeft, paddingRight, paddingTop, paddingBottom, backgroundColor, margin, padding, textAlign, marginHorizontal, marginVertical, paddingHorizontal, paddingVertical } = this.props;
    const { onPress } = this.props;

    const { style, color, size, fontWeight, H1, H2, H3, ...rest } = this.props;
    var styles;

    if (marginLeft) {
      styles = { ...styles, marginLeft };
    }
    if (marginRight) {
      styles = { ...styles, marginRight };
    }
    if (marginTop) {
      styles = { ...styles, marginTop };
    }
    if (marginBottom) {
      styles = { ...styles, marginBottom };
    }
    if (paddingLeft) {
      styles = { ...styles, paddingLeft };
    }
    if (paddingRight) {
      styles = { ...styles, paddingRight };
    }
    if (paddingTop) {
      styles = { ...styles, paddingTop };
    }
    if (paddingBottom) {
      styles = { ...styles, paddingBottom };
    }
    if (backgroundColor) {
      styles = { ...styles, backgroundColor };
    }
    if (margin) {
      styles = { ...styles, margin };
    }
    if (marginHorizontal) {
      styles = { ...styles, marginHorizontal };
    }
    if (marginVertical) {
      styles = { ...styles, marginVertical };
    }
    if (padding) {
      styles = { ...styles, padding };
    }
    if (textAlign) {
      styles = { ...styles, textAlign };
    }
    if (color) {
      styles = { ...styles, color };
    }
    if (fontWeight) {
      styles = { ...styles, fontWeight };
    }
    if (size) {
      styles = { ...styles, fontSize: size };
    }

    if (H1) {
      styles = { ...styles, fontSize: 32 };
    }

    if (H2) {
      styles = { ...styles, fontSize: 24 };
    }

    if (H3) {
      styles = { ...styles, fontSize: 20 };
    }

    styles = { ...styles, ...style };

    // styles = { color: Collection.color1 || color, ...styles };

    // console.log(styles)
    var texts;
    if (onPress) {
      texts =
        <TouchableOpacity onPress={onPress}>
          <Text style={styles} {...rest} />
        </TouchableOpacity>;
    } else {
      texts = <Text style={styles} {...rest} />;
    }


    return texts;
  }
}

export default Texts;
