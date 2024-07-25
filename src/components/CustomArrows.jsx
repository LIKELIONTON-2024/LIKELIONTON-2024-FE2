import React from 'react';
import {Image, View, StyleSheet} from 'react-native';

const LeftArrow = () => (
  <View style={styles.arrowContainer}>
    <Image
      source={require('../assets/MyPageIcons/left-arrow.png')}
      style={styles.arrow}
    />
  </View>
);

const RightArrow = () => (
  <View style={styles.arrowContainer}>
    <Image
      source={require('../assets/MyPageIcons/right-arrow.png')}
      style={styles.arrow}
    />
  </View>
);

const styles = StyleSheet.create({
  arrowContainer: {
    padding: 10,
  },
  arrow: {
    width: 10,
    height: 10,
  },
});

export {LeftArrow, RightArrow};
