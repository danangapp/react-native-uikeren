/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Button, VW, Rows, Centers } from 'react-native-uikeren';
var bgc = [];

export default class Accordions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
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
        <View key={i}>
          <TouchableOpacity key={i} style={{ paddingVertical: 10, paddingHorizontal: 30, backgroundColor: selected == i ? 'yellow' : 'red', borderRadius: 10 }} onPress={() => { this.toActive(i) }}>
            <VW pos="row-between">
              <Text>{a.name}</Text>
              <Text>!</Text>
            </VW>
          </TouchableOpacity>
          <Text style={{ display: selected == i ? 'flex' : 'none' }}>{selected}</Text>
        </View>
      )
      bs[i] = b;
    })

    return bs;
  }

  render() {
    const { selected } = this.state;

    return (
      <View>
        {this.renderButton()}
      </View>
    );
  }
}


var s = StyleSheet.create({

});
