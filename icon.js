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
import Collection from './collection';


export default class Icon extends Component {

    renderIcon() {
        var icons;
        const { icon, name, size, color, style, ...rest } = this.props;
        const { AntDesigns, Entypos, EvilIconss, Feathers, FontAwesomes, FontAwesome5s, Fontistos, Foundations, Ioniconss, MaterialCommunityIconss, MaterialIconss, Octiconss, SimpleLineIconss, Zocials } = this.props;

        icons = <FontAwesome name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;

        if (AntDesigns) {
            icons = <AntDesign name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
        } else if (Entypos) {
            icons = <Entypo name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
        } else if (EvilIconss) {
            icons = <EvilIcons name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
        } else if (Feathers) {
            icons = <Feather name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
        } else if (FontAwesomes) {
            icons = <FontAwesome name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
        } else if (FontAwesome5s) {
            icons = <FontAwesome5 name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
        } else if (Fontistos) {
            icons = <Fontisto name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
        } else if (Foundations) {
            icons = <Foundation name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
        } else if (Ioniconss) {
            icons = <Ionicons name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
        } else if (MaterialCommunityIconss) {
            icons = <MaterialCommunityIcons name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
        } else if (MaterialIconss) {
            icons = <MaterialIcons name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
        } else if (Octiconss) {
            icons = <Octicons name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
        } else if (SimpleLineIconss) {
            icons = <SimpleLineIcons name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
        } else if (Zocials) {
            icons = <Zocial name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
        }

        return icons;
    }

    render() {
        return this.renderIcon();
    }
}
