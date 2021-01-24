/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';

export default class Check extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cheked: false,
      source: this.props.nonactive,
    };

    this.component = this.props.nonactive;
  }

  check() {
    const { checked } = this.state;
    const { active, nonactive, Custom } = this.props;
    if (checked) {
      this.setState({ checked: false, source: active });
      if (Custom) {
        this.component = nonactive;
      }
    } else {
      this.setState({ checked: true, source: nonactive });
      if (Custom) {
        this.component = active;
      }
    }
  }

  render() {
    const { style, size, Custom, ...rest } = this.props;
    const { source } = this.state;
    if (!Custom) {
      this.component = <Image source={source} style={{ width: size, height: size }} />;
    }


    return (
      <TouchableOpacity onPress={() => { this.check(); }} style={s.container}>
        {this.component}
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
