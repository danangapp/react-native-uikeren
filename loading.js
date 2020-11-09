/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Image, Text } from 'react-native';
import View from 'react-native-uikeren/viewlayout';
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
      <View type="absolute-loading" style={{ backgroundColor: color || 'transparent' }}>
        <View type="center-center" style={{ display: display ? 'flex' : 'none' }}>
          <Image source={image || require('./images/spinner.gif')} style={{ width: size || 50, height: size || 50 }} />
          <View type='center'>
            <Text>{text}</Text>
          </View>
        </View>
      </View>
    );
  }
}


var s = StyleSheet.create({
  paging: {
    marginRight: 5
  }
});
