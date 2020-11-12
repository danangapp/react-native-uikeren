/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Animated, View } from 'react-native';
import { View as Vw } from 'react-native-uikeren';
var bgc = [];

export default class Tabs extends Component {
  constructor(props) {
    super(props);
    this.startValue = new Animated.Value(1);
    this.state = {
      selected: 0,
      endValue: 2,
      duration: 600,
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
      if (index == i) {
        b = <Animated.View key={i} style={[s.paging, { backgroundColor: index == i ? activecolor || 'black' : color || 'gray', transform: [{ scale: this.startValue, },], }]}></Animated.View>
      } else {
        b = <View key={i} style={[s.paging, { backgroundColor: index == i ? activecolor || 'black' : color || 'gray', }]}></View>
      }
      bs[i] = b;
      i++;
    }

    return bs;
  }

  callAnim() {
    this.startValue.setValue(1);
    Animated.timing(this.startValue, {
      toValue: this.state.endValue,
      duration: this.state.duration,
      useNativeDriver: true,
    }).start();
  }

  render() {
    this.renderButton();
    this.callAnim();
    const { selected } = this.state;

    return (
      <Vw type="col-center">
        <Vw type="row" style={{ alignItems: 'center' }}>
          {this.renderButton()}
        </Vw>
      </Vw>
    );
  }
}


var s = StyleSheet.create({
  paging: {
    marginRight: 10,
    width: 10,
    height: 10,
    borderRadius: 10 / 2,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
