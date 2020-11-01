/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';

class Header extends Component {
  render() {
    const { l, r, b } = this.props;
    return (
      <View style={s.container}>
        <View>
          {l ? <View>{l}</View> : null}
        </View>
        <View style={{ flexGrow: 1 }}>
          {b ? <View>{b}</View> : null}
        </View>
        <View>
          {r ? <View>{r}</View> : null}
        </View>
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
  },
});
