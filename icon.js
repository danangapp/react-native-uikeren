/* eslint-disable no-sequences */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import Vw from './viewlayout';
import Text from './text';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import Ioniconss from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';
import Collection from './collection';


export default class Icon extends Component {

    renderIcon() {
        var icons;
        const { icon, name, size, color, texttop, textbottom, textleft, textright, Circle, onPress, style, ...rest } = this.props;
        const { AntDesigns, Entypos, EvilIconss, Feathers, FontAwesomes, FontAwesome5s, Fontistos, Foundations, Ionicons, MaterialCommunityIconss, MaterialIconss, Octiconss, SimpleLineIconss, Zocials } = this.props;
        const { margin, padding, marginLeft, marginRight, marginTop, marginBottom, paddingLeft, paddingRight, paddingTop, paddingBottom, width, height, backgroundColor } = this.props;
        var st = { margin, padding, marginLeft, marginRight, marginTop, marginBottom, paddingLeft, paddingRight, paddingTop, paddingBottom, width, height, backgroundColor, size };

        icons = <Ioniconss name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;

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
        } else if (Ionicons) {
            icons = <Ioniconss name={name} size={size || 20} color={color || Collection.color1} style={style}  {...rest} />;
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


        if (textbottom) {
            icons =
                <Vw style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
                    <Vw Center>
                        {icons}
                    </Vw>
                    <Text marginTop={5} color={color || Collection.color1}>{textbottom}</Text>
                </Vw>;
        } else if (texttop) {
            icons =
                <Vw style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
                    <Text marginBottom={5} color={color || Collection.color1}>{texttop}</Text>
                    <Vw Center>
                        {icons}
                    </Vw>
                </Vw>;
        } else if (textleft) {
            icons =
                <Vw Row style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
                    <Text marginRight={5} color={color || Collection.color1}>{textleft}</Text>
                    {icons}
                </Vw>;
        }
        if (textright) {
            icons =
                <Vw Row style={{ alignSelf: 'flex-start', alignItems: 'center' }}>
                    {icons}
                    <Text textAlign="center" marginLeft={5} color={color || Collection.color1}>{textright}</Text>
                </Vw>;
        }

        if (Circle) {
            icons =
                <Vw style={style, st}>
                    <Vw Circle size={size + 15}>
                        {icons}
                    </Vw>
                </Vw>;
        }

        if (onPress) {
            icons =
                <TouchableOpacity onPress={onPress}>
                    {icons}
                </TouchableOpacity>;
        }




        return icons;
    }

    render() {
        return this.renderIcon();
    }
}
