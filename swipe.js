import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
var screenwidth;
const { width } = Dimensions.get('window');

class Container extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: width,
      index: 0,
      screenwidth: 0,
    }
  }

  calc(e) {
    this.setState({ index: e.nativeEvent.contentOffset.x / this.state.screenwidth });
  }

  onLayout(e) {
    this.setState({ screenwidth: e.nativeEvent.layout.width });
    var x = e.nativeEvent.layout.width * Math.round(this.state.index);
    setTimeout(() => {
      if (this.refs.scroll)
        this.refs.scroll.scrollTo({ x: x, y: 0, animate: true });
    }, 100);
    this.props.screenwidth(this.state.screenwidth);
  }

  // renderSwipe() {
  //   const { list } = this.props;
  //   const { screenwidth } = this.state;
  //   var bs = [], b;
  //   list.map((a, i) => {
  //     b = (
  //       <View key={i} style={{ width: screenwidth > 0 ? screenwidth : width }}>
  //         <Image source={a.image} style={{ width: 100, height: 100 }} />
  //         <Text>{a.title}</Text>
  //         <Text>{a.subtitle}</Text>
  //         <Text>{a.detail}</Text>
  //       </View>
  //     )
  //     bs[i] = b;
  //   })

  //   return bs;
  // }

  render() {
    const { view, style, padding, paging, ...rest } = this.props;
    const { screenwidth, index } = this.state;

    return (
      <View style={{ flex: 1 }} onLayout={(e) => { this.onLayout(e) }}>
        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate={'fast'}
          onScroll={(e) => { this.calc(e) }}
          ref='scroll'
          scrollToEnd={[{ animated: false, duration: 100 }]}
          showsHorizontalScrollIndicator={false}
          onMomentumScrollEnd={(e) => { paging(Math.round(index)) }}
        >
          {view}
        </ScrollView>
      </View>
    );
  }
}

export default Container;

var s = StyleSheet.create({
  container: {
    flex: 1,
  },
});
