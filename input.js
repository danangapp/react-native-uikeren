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
    const { style, title, placeholder, ...rest } = this.props;

    return (
      <View>
        {title ? <Text>{title}</Text> : null}
        <TextInput style={s.input} placeholder={placeholder} />
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
    borderWidth: 1,
    borderRadius: 5,
    padding: 15,
    marginVertical: 10,
    color: 'gray',
  },
});
