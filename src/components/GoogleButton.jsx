import axios from 'axios';
import {useState} from 'react';
import {Alert, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Button} from './common/button';
import {COLOR} from '../module/Color';
import {BaseURL} from '../libs/api';
// import BaseURL from '@env';

export default function GoogleLoginButton({onPress}) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

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
    <Button
      onPress={handleGoogleLogin}
      bgColor={COLOR.GRAY_100}
      text={loading ? '로딩 중...' : '구글로 계속하기'}
      disabled={loading}
    />
  );
}
