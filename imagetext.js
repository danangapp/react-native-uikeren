/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Centers from 'react-native-uikeren/centers';

export default class ImageText extends Component {
    render() {
        const { image, text, onPress, width, height, ...rest } = this.props;
        return (
            <TouchableOpacity style={s.vw} onPress={onPress}>
                <Centers>
                    <Image source={image} style={{ width: width || 150, height: height ? height : (width || 150) }} />
                    <Text style={s.text}>{text}</Text>
                </Centers>
            </TouchableOpacity>
        );
    }
}

var s = StyleSheet.create({
    vw: {
        marginVertical: 10,
        padding: 10,
    },
    text: {
        fontSize: 18,
        marginTop: 5,
    },
    subtitle: {
        marginBottom: 10,
    },
});
