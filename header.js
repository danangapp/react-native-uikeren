/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Icons, View } from 'react-native-uikeren';

class Header extends Component {
  render() {
    const { left, right, b } = this.props;
    return (
      <View style={s.container}>
        <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => { alert('ok') }}>
          <Icons name="glass" />
        </TouchableOpacity>
        <View style={{ alignItems: left ? 'stretch' : 'center', flex: 1 }}>
          <Text>Danang</Text>
        </View>
        <TouchableOpacity style={{ marginHorizontal: 10 }}>
          <Icons name="glass" />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;

var s = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
