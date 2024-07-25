import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {COLOR} from '../module/Color';
import React from 'react';
import {Button} from '../components/common/button';
import GoogleLoginButton from '../components/GoogleButton';

export default ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLOR.BLUE_400,
        alignItems: 'center',
      }}>
      <View
        style={{
          flex: 1,
          gap: 8,
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <Text
          style={{
            alignSelf: 'flex-start',
            color: COLOR.WHITE,
            fontWeight: 'bold',
          }}>
          나가서 바람이라도 쐐____________
        </Text>
        <Text style={{fontWeight: 'bold', fontSize: 50}}>힉힉호무리</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 14,
        }}>
        <Button
          onPress={() => navigation.navigate('Agree')}
          bgColor={COLOR.KAKAOBUTTON}
          text={'카카오로 계속하기'}
        />
        <Button
          onPress={() => {}}
          bgColor={COLOR.NAVERBUTTON}
          text={'네이버로 계속하기'}
        />
        <GoogleLoginButton />
      </View>
    </SafeAreaView>
  );
};
