/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Vw from './viewlayout';
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
      console.log(a)
      b = (
        <TouchableOpacity key={i} style={{ paddingVertical: 10, paddingHorizontal: 30, backgroundColor: selected == i ? 'yellow' : 'red', borderRadius: 10 }} onPress={() => { this.toActive(i) }}>
          <Vw Center>
            <Text>{a.name}</Text>
          </Vw>
        </TouchableOpacity>
      )
      bs[i] = b;
    })

    return bs;
  }

  render() {
    const { selected } = this.state;

    return (
      <Vw>
        <Vw Row>
          {this.renderButton()}
        </Vw>
        <Text>{selected}</Text>
      </Vw>
    );
  }
}


var s = StyleSheet.create({

});
