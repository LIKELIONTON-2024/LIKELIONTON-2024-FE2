import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import SettingSection from './section/SettingSection';
import ProfileSection from './section/ProfileSection';
import TabSection from './section/TabSection';

import {COLOR} from '../../module/Color';

function MyPageScreen() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.container}>
        <SettingSection />
        <ProfileSection />
        <TabSection />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
});

export default MyPageScreen;
