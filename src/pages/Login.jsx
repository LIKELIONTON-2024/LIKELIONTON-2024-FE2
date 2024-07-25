import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLOR} from '../libs/Color';
import React, {useState} from 'react';
import {Button} from '../components/common/button';
import axios from 'axios';
import {BaseURL} from '../libs/api';

export default ({navigation}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${BaseURL}oauth2/google/login`);
      // console.log(BaseURL, 'baseURL');
      if (response.status === 200) {
        // 로그인 성공 처리
        setUser(response.data);
        console.log('Login successful:', response.data);
        Alert.alert(
          '로그인 성공',
          'Google 로그인이 성공적으로 완료되었습니다.',
        );
        navigation.navigate('Agree'); // Agree 스크린으로 네비게이션
      } else {
        // 로그인 실패 처리
        console.log('Login failed:', response.status);
        Alert.alert('로그인 실패', 'Google 로그인이 실패하였습니다.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      Alert.alert('오류', '로그인 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

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
        <Button
          onPress={handleGoogleLogin}
          bgColor={COLOR.GRAY_100}
          text={'구글로 계속하기'}
        />
      </View>
    </SafeAreaView>
  );
};
