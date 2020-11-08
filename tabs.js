/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Button, VW, Rows, Centers } from 'react-native-uikeren';
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
          <Centers>
            <Text>{a.name}</Text>
          </Centers>
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
        <Rows>
          {this.renderButton()}
        </Rows>
        <Text>{selected}</Text>
      </View>
    );
  }
}


var s = StyleSheet.create({

});
