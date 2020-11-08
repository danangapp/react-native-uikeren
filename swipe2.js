import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Dimensions } from 'react-native';
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
    // console.log(e.nativeEvent.contentOffset.x / this.state.screenwidth, Math.round(this.state.index))
  }

  onLayout(e) {
    this.setState({ screenwidth: e.nativeEvent.layout.width });
    var x = e.nativeEvent.layout.width * Math.round(this.state.index);
    // console.log(e.nativeEvent.layout.width, this.state.index, width, x)
    // console.log(x)
    setTimeout(() => {
      if (this.refs.scroll)
        this.refs.scroll.scrollTo({ x: x, y: 0, animate: true });
    }, 100);
  }

  render() {
    const { style, padding, ...rest } = this.props;
    if (this.state.screenwidth > 0) {
      console.log(this.state.screenwidth)
    }
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
        // onMomentumScrollEnd={(e) => { console.log(e.nativeEvent.contentOffset.x) }}
        >
          <View style={{ width: this.state.screenwidth > 0 ? this.state.screenwidth : width, backgroundColor: 'yellow' }}>
            <TouchableOpacity onPress={() => { console.log(this.state.screenwidth) }}><Text>Danang</Text></TouchableOpacity>
          </View>
          <View style={{ width: this.state.screenwidth > 0 ? this.state.screenwidth : width, backgroundColor: 'red' }}>
            <Text>Danang</Text>
          </View>
          <View style={{ width: this.state.screenwidth > 0 ? this.state.screenwidth : width, backgroundColor: 'green' }}>
            <Text>Danang</Text>
          </View>
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
