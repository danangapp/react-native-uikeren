/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Centers from 'react-native-uikeren/centers';
import Icons from 'react-native-uikeren/icon';


export default class Buttons extends Component {

  renderButton() {
    const { text, key, onPress, flex, color, outline, round, icon, iconname, iconsize, textsize, style, type, full, ...rest } = this.props;
    let b;
    const TextButton = <Text style={{ fontSize: textsize || 15, color: outline ? color || 'white' : 'white' }}>{text}</Text>;
    const styleTouch = [
      s.container,
      {
        backgroundColor: outline ? 'transparent' : (color || '#007BFF'),
        borderWidth: outline ? 2 : 0,
        borderColor: color || 'gray',
        borderRadius: round ? 50 : 10,
        alignSelf: full ? 'stretch' : 'center'
      },
      style
    ];
    const iconx = <Icons icon={icon || "FontAwesome"} name={iconname || 'glass'} size={iconsize || 15} color={color || 'white'} />

    if (type) {
      if (type == "icon-top") {
        b = (
          <TouchableOpacity key={key || null} style={styleTouch} onPress={onPress} {...rest}>
            <View style={{ marginBottom: 10 }}>
              {iconx}
            </View>
            {TextButton}
          </TouchableOpacity>
        )
      } else if (type == "icon-right") {
        b = (
          <TouchableOpacity key={key || null} style={[styleTouch, { flexDirection: 'row' }]} onPress={onPress} {...rest}>
            {TextButton}
            <View style={{ marginLeft: 10 }}>
              {iconx}
            </View>
          </TouchableOpacity>
        )
      } else if (type == "icon-bottom") {
        b = (
          <TouchableOpacity key={key || null} style={styleTouch} onPress={onPress} {...rest}>
            {TextButton}
            <View style={{ marginTop: 10 }}>
              {iconx}
            </View>
          </TouchableOpacity>
        )
      } else if (type == "icon-left") {
        b = (
          <TouchableOpacity key={key || null} style={[styleTouch, { flexDirection: 'row' }]} onPress={onPress} {...rest}>
            <View style={{ marginRight: 10 }}>
              {iconx}
            </View>
            {TextButton}
          </TouchableOpacity>
        )
      } else if (type == "icon") {
        b = (
          <TouchableOpacity key={key || null} style={styleTouch} onPress={onPress} {...rest}>
            {icon}
          </TouchableOpacity>
        )
      }
    } else {
      b = <TouchableOpacity key={key || null} style={styleTouch} onPress={onPress} {...rest}>
        {TextButton}
      </TouchableOpacity>
    }

    return b;
  }

  render() {
    return this.renderButton();
  }
}


var s = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    marginVertical: 10,
    alignItems: 'center',
    alignSelf: 'center',
  }
});
