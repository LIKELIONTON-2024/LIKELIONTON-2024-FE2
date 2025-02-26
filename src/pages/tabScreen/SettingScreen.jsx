import React from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import BasicHeader from '../../components/BasicHeader';
import ProfileSection from '../settingScreen/ProfileSection';
import DetailArrow from '../../components/DetailArrow';

import {COLOR} from '../../libs/Color';

const ProfileImg = require('../../assets/images/defaultCat.png');

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={styles.background}>
        <BasicHeader title={'설정'} toScreen={'MyPage'} />
        <ProfileSection />
        <View style={styles.gap}>
          <DetailArrow title={'이용 약관'} toScreen={'MyPage'} />
          <DetailArrow title={'개인 정보 처리 방침'} toScreen={'MyPage'} />
        </View>
        <View style={styles.gap}>
          <DetailArrow title={'알림 설정'} toScreen={'MyPage'} />
          <DetailArrow title={'위치 권한 설정'} toScreen={'MyPage'} />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: COLOR.WHITE,
  },
  background: {
    backgroundColor: COLOR.GRAY_100,
  },
  gap: {
    marginTop: 20,
  },
});

export default SettingScreen;
