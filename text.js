/* eslint-disable react/self-closing-comp */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import Vw from './viewlayout';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

class Texts extends Component {
  render() {
    const { marginLeft, marginRight, marginTop, marginBottom, paddingLeft, paddingRight, paddingTop, paddingBottom, backgroundColor, margin, padding, width, height, textAlign } = this.props;
    var st = { marginLeft, marginRight, marginTop, marginBottom, paddingLeft, paddingRight, paddingTop, paddingBottom, backgroundColor, margin, padding, width, height, textAlign };
    const { style, color, fontSize, fontWeight, ...rest } = this.props;
    return (
      <Text style={[st, style, { color, fontSize, fontWeight }]} {...rest} />
    );
  }
}

export default Texts;