/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native-uikeren';
var bgc = [];

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
  }

  toActive(i) {
    this.setState({ selected: i })
  }

  renderButton() {
    const { count, width, color, index, activecolor } = this.props;
    const { selected } = this.state;

    var bs = [], b, i = 0;
    while (i < count) {
      console.log(index, i);
      b = <View key={i} type="circle" width={width || 10} style={[s.paging, { backgroundColor: index == i ? activecolor || 'black' : color || 'gray' }]}></View>
      bs[i] = b;
      i++;
    }

    return bs;
  }

  render() {
    this.renderButton()
    const { selected } = this.state;

    return (
      <View type="center">
        <View type="row">
          {this.renderButton()}
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
