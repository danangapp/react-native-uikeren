/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Text } from 'react-native';
import Vw from './viewlayout';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Collection from './collection';

class Header extends Component {
  render() {
    const { left, right, body, bodycenter, backgroundColor, style, color } = this.props;
    var vw, lefts, rights, bodys;

    if (left) {
      lefts = typeof left === 'string' ? <Text style={{ marginRight: 20, color: color || Collection.color1 }}>{left}</Text> : left;
    }

    if (right) {
      rights = typeof right === 'string' ? <Text style={{ marginLeft: 20, color: color || Collection.color1 }}>{right}</Text> : right;
    }

    if (body || bodycenter) {
      bodys = typeof (body === 'string' || bodycenter === 'string') ? <Text style={{ flex: 1, color: color || Collection.color1, textAlign: bodycenter ? 'center' : 'left' }}>{body || bodycenter}</Text> : (body || bodycenter);
    }

    vw = <Vw Row>
      {lefts}
      {bodys}
      {rights}
    </Vw>;

    return (
      <Vw style={[{ paddingHorizontal: 10, paddingVertical: 15, backgroundColor: backgroundColor || Collection.bgcolor1 }, style]}>
        {vw}
      </Vw>
    );
  }
}

export default Header;
