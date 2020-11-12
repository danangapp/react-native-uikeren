/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';


export default class Icon extends Component {

    renderIcon() {
        var icons;
        const { icon, name, size, color, style, ...rest } = this.props;
        if (icon) {
            if (icon == "AntDesign") {
                icons = <AntDesign name={name} size={size || 25} color={color} style={style}  {...rest} />
            } else if (icon == "Entypo") {
                icons = <Entypo name={name} size={size || 25} color={color} style={style}  {...rest} />
            } else if (icon == "EvilIcons") {
                icons = <EvilIcons name={name} size={size || 25} color={color} style={style}  {...rest} />
            } else if (icon == "Feather") {
                icons = <Feather name={name} size={size || 25} color={color} style={style}  {...rest} />
            } else if (icon == "FontAwesome") {
                icons = <FontAwesome name={name} size={size || 25} color={color} style={style}  {...rest} />
            } else if (icon == "FontAwesome5") {
                icons = <FontAwesome5 name={name} size={size || 25} color={color} style={style}  {...rest} />
            } else if (icon == "Fontisto") {
                icons = <Fontisto name={name} size={size || 25} color={color} style={style}  {...rest} />
            } else if (icon == "Foundation") {
                icons = <Foundation name={name} size={size || 25} color={color} style={style}  {...rest} />
            } else if (icon == "Ionicons") {
                icons = <Ionicons name={name} size={size || 25} color={color} style={style}  {...rest} />
            } else if (icon == "MaterialCommunityIcons") {
                icons = <MaterialCommunityIcons name={name} size={size || 25} color={color} style={style}  {...rest} />
            } else if (icon == "MaterialIcons") {
                icons = <MaterialIcons name={name} size={size || 25} color={color} style={style}  {...rest} />
            } else if (icon == "Octicons") {
                icons = <Octicons name={name} size={size || 25} color={color} style={style}  {...rest} />
            } else if (icon == "SimpleLineIcons") {
                icons = <SimpleLineIcons name={name} size={size || 25} color={color} style={style}  {...rest} />
            } else if (icon == "Zocial") {
                icons = <Zocial name={name} size={size || 25} color={color} style={style}  {...rest} />
            }
        } else {
            icons = <FontAwesome name={name} size={size || 25} color={color} style={style}  {...rest} />
        }

        return icons;
    }

    render() {
        return this.renderIcon();
    }
}


var s = StyleSheet.create({
    container: {
        backgroundColor: 'yellow',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
    }
});
