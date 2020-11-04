/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import Rows from './rows';

class List extends Component {
  render() {
    const { image, title, subtitle, detail, ...rest } = this.props;
    return (
      <Rows>
        <Image source={image} style={s.image} />
        <View style={s.vw}>
          <Text style={s.title}>{title}</Text>
          {subtitle ? <Text style={s.subtitle}>{subtitle}</Text> : null}
          <Text>{detail}</Text>
        </View>
      </Rows>
    );
  }
}

export default List;

var s = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
  },
  vw: {
    marginLeft: 20,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    marginBottom: 10,
  },
});
