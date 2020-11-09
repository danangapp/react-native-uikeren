/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import View from 'react-native-uikeren/viewlayout';
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
    const { list } = this.props;
    const { selected } = this.state;

    var bs = [], b;
    list.map((a, i) => {
      b = (
        <TouchableOpacity key={i} style={{ paddingVertical: 10, paddingHorizontal: 30, backgroundColor: selected == i ? 'yellow' : 'red', borderRadius: 10 }} onPress={() => { this.toActive(i) }}>
          <View type="center">
            <Text>{a.name}</Text>
          </View>
        </TouchableOpacity>
      )
      bs[i] = b;
    })

    return bs;
  }

  render() {
    const { selected } = this.state;

    return (
      <View>
        <View type="row">
          {this.renderButton()}
        </View>
        <Text>{selected}</Text>
      </View>
    );
  }
}


var s = StyleSheet.create({

});
