/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import Vw from './viewlayout';
import Text from './text';


export default class Img extends Component {

    renderImage() {
        const { source, no, size, texttop, textbottom, textleft, textright, space, width, height, onPress, style, ...rest } = this.props;
        var st = { marginLeft, marginRight, marginTop, marginBottom, paddingLeft, paddingRight, paddingTop, paddingBottom, width, height, backgroundColor };
        const { marginLeft, marginRight, marginTop, marginBottom, paddingLeft, paddingRight, paddingTop, paddingBottom, backgroundColor } = this.props;

        var styles = { ...st, resizeMode: 'contain', ...style };
        var withText = { ...styles, width: size || width || 50, height: size || height || 50 };
        const imageText = (
            <Image key={no} source={source} style={withText} {...rest} />
        );
        var styleTextVertical = { alignItems: 'center' };
        var styleTextHorizontal = { flexDirection: 'row', alignItems: 'center' };
        var text = [];

        if (size) {
            styles = { ...withText };
        }

        var images = <Image key={no} source={source} style={styles} {...rest} />;

        if (textbottom) {
            text[0] = imageText;
            text[1] = <Text key={'text' + no} marginTop={space || 5}>{textbottom}</Text>;
        } else if (texttop) {
            text[0] = <Text key={'text' + no} marginBottom={space || 5}>{texttop}</Text>;
            text[1] = imageText;
        } else if (textleft) {
            text[0] = <Text key={'text' + no} marginRight={space || 5}>{textleft}</Text>;
            text[1] = imageText;
        } else if (textright) {
            text[0] = imageText;
            text[1] = <Text key={'text' + no} marginLeft={space || 5}>{textright}</Text>;
        }

        if (textbottom || texttop) {
            images = <Vw style={styleTextVertical}>
                {text}
            </Vw>;
        }

        if (textleft || textright) {
            images = <Vw style={styleTextHorizontal}>
                {text}
            </Vw>;
        }

        if (onPress) {
            images =
                <TouchableOpacity onPress={onPress}>
                    {images}
                </TouchableOpacity>;
        }

        return images;
    }

    render() {
        return this.renderImage();
    }
}
