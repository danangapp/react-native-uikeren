/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

export default class Inputs extends Component {

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
    const { style, title, placeholder, material, nomargin, ...rest } = this.props;

    return (
      <View>
        {title ? <Text>{title}</Text> : null}
        <TextInput style={[s.input, { marginVertical: nomargin ? 0 : 10, borderTopWidth: material ? 0 : 1, borderRightWidth: material ? 0 : 1, borderLeftWidth: material ? 0 : 1 }]} placeholder={placeholder} />
      </View>
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
  },
  input: {
    height: 50,
    borderColor: 'gray',
    borderBottomWidth: 1,
    borderRadius: 5,
    padding: 15,
    color: 'gray',
  },
});
