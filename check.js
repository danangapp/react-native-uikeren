/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Rows from 'react-native-uikeren/rows';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default class Check extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cheked: false,
      name: 'square-o',
    };
  }

  check() {
    const { checked } = this.state;
    if (checked) {
      this.setState({ checked: false, name: 'square-o' })
    } else {
      this.setState({ checked: true, name: 'check-square' })
    }
  }

  render() {
    const { style, onPress, text, ...rest } = this.props;
    const { checked, name } = this.state;

    return (
      <TouchableOpacity onPress={() => { this.check(); }} style={s.container}>
        <Rows>
          <FontAwesome name={this.state.name} size={25} />
          <Text style={s.text}>{text}</Text>
        </Rows>
      </TouchableOpacity>
    );
  }
}

var s = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  text: {
    marginLeft: 10,
    marginTop: 2,
  }
});
