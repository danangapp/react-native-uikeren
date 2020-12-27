/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Vw from './viewlayout';

class Footer extends Component {
  render() {
    return (
      <Vw padding={20} RowBetween {...this.props} />
    );
  }
}

export default Footer;
