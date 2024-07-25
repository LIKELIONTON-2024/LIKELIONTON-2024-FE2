import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function MyPage() {
  return (
    <View style={styles.container}>
      <Text>My Page</Text>
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

export default MyPage;
