/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import Vw from './viewlayout';
var bgc = [];

export default class Loading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  render() {
    const { image, display, size, text, color } = this.props;

    return (
      <Vw AbsoluteLoading style={{ backgroundColor: color || 'transparent' }}>
        <Vw CenterCenter style={{ display: display == 1 ? 'flex' : 'none' }}>
          <Image source={image || require('./images/spinner.gif')} style={{ width: size || 50, height: size || 50 }} />
          <Vw Center>
            <Text>{text}</Text>
          </Vw>
        </Vw>
      </Vw>
    );
  }
}


var s = StyleSheet.create({
  paging: {
    marginRight: 5
  }
});
