import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';

const InventoryScreen = () => (
  <ScrollView>
    <View style={styles.container}>
      <View style={styles.scene}>
        <Text>인벤토리</Text>
      </View>
    </View>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scene: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default InventoryScreen;
