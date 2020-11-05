/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import Rows from './rows';

class List extends Component {
    render() {
        const { image, title, subtitle, detail, rtl, onPress, ...rest } = this.props;
        return (
            <TouchableOpacity style={s.vw} onPress={onPress}>
                <Rows>
                    {rtl ? null : <Image source={image} style={s.image} />}
                    <View style={{ flex: 1, marginLeft: rtl ? 0 : 20 }}>
                        <Text style={s.title}>{title}</Text>
                        {subtitle ? <Text style={s.subtitle}>{subtitle}</Text> : null}
                        <Text>{detail}</Text>
                    </View>
                    {rtl ? <Image source={image} style={s.image} /> : null}
                </Rows>
            </TouchableOpacity>
        );
    }
}

export default List;

var s = StyleSheet.create({
    vw: {
        marginVertical: 10,
    },
    image: {
        width: 90,
        height: 90,
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        marginBottom: 10,
    },
});
