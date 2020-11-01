/* eslint-disable no-unused-vars */
/* eslint-disable no-const-assign */
/* eslint-disable eqeqeq */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Container from './container';
import Centers from './centers';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Zocial from 'react-native-vector-icons/Zocial';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

class Card extends Component {
  render() {
    const { style, icon, name, size, fontsize, ...rest } = this.props;
    var resultIcon, sizes = size || 50;
    if (icon) {
      if (icon == 'AntDesign') {
        resultIcon = <AntDesign name={name} size={sizes} />;
      } else if (icon == 'Entypo') {
        resultIcon = <Entypo name={name} size={sizes} />;
      } else if (icon == 'EvilIcons') {
        resultIcon = <EvilIcons name={name} size={sizes} />;
      } else if (icon == 'Feather') {
        resultIcon = <Feather name={name} size={sizes} />;
      } else if (icon == 'FontAwesome') {
        resultIcon = <FontAwesome name={name} size={sizes} />;
      } else if (icon == 'FontAwesome 5') {
        resultIcon = <FontAwesome5 name={name} size={sizes} />;
      } else if (icon == 'Fontisto') {
        resultIcon = <Fontisto name={name} size={sizes} />;
      } else if (icon == 'Foundation') {
        resultIcon = <Foundation name={name} size={sizes} />;
      } else if (icon == 'Ionicons') {
        resultIcon = <Ionicons name={name} size={sizes} />;
      } else if (icon == 'MaterialIcons') {
        resultIcon = <MaterialIcons name={name} size={sizes} />;
      } else if (icon == 'MaterialCommunityIcons') {
        resultIcon = <MaterialCommunityIcons name={name} size={sizes} />;
      } else if (icon == 'Octicons') {
        resultIcon = <Octicons name={name} size={sizes} />;
      } else if (icon == 'Zocial') {
        resultIcon = <Zocial name={name} size={sizes} />;
      } else if (icon == 'SimpleLineIcons') {
        resultIcon = <SimpleLineIcons name={name} size={sizes} />;
      }
    } else {
      resultIcon = <View />;
    }

    return (
      // <View style={[s.container, style]} {...rest} />
      <Container>
        <Centers>
          {resultIcon}
          <Text style={{ fontSize: fontsize }}>Danang</Text>
        </Centers>
      </Container>
    );
  }
}

export default Card;

var s = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
