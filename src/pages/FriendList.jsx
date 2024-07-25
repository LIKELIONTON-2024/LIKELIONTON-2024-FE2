import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function FriendList() {
  return (
    <View style={styles.container}>
      <Text>Friends List</Text>
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

export default FriendList;
