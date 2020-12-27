/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';
import Vw from './viewlayout';

class Fabs extends Component {

  renderPosition(index) {
    const { TopLeft, TopRight, BottomLeft, BottomRight, margin, size } = this.props;
    var position, vw, sizes;

    if (TopLeft || TopRight || BottomLeft || BottomRight) {
      sizes = ((size + 10) * index) - size;
      let sizeTopLeft = undefined;
      let sizeTopRight = undefined;
      let sizeBottomLeft = undefined;
      let sizeBottomRight = undefined;

      if (BottomRight) {
        sizeBottomRight = sizes;
      } else if (TopRight) {
        sizeTopRight = sizes;
      } else if (BottomLeft) {
        sizeBottomLeft = sizes;
      } else if (TopLeft) {
        sizeTopLeft = sizes;
      }

      position = {
        top: TopLeft || TopRight ? margin : undefined,
        right: BottomRight || TopRight ? margin : undefined,
        bottom: BottomLeft || BottomRight ? margin + sizes : undefined,
        left: BottomLeft || TopLeft ? margin : undefined,
      }
    } else {
      position = {
        top: margin,
        right: undefined,
        bottom: undefined,
        left: margin,
      }
    }

    return (
      <Vw CircleAbsolute width={50} style={position}>
        <Text>D</Text>
      </Vw>
    );
  }

  render() {
    return (
      <Vw Flex>
        {this.renderPosition(1)}
        {this.renderPosition(2)}
        {this.renderPosition(3)}
        {this.renderPosition(4)}
        {this.renderPosition(5)}
      </Vw>
    );
  }
}

export default Fabs;
