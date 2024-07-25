import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Certification() {
  return (
    <View style={styles.container}>
      <Text>Certification</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Certification;
