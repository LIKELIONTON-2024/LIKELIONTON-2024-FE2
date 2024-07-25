import {SafeAreaView, Text, View} from 'react-native';
import {COLOR} from '../module/Color';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

export default () => {
  const signOut = async () => {
    try {
      await GoogleSignin.signOut();
      setUserInfo(null); // 사용자 정보 초기화
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR.WHITE}}>
      <Text>마이페이지</Text>
    </SafeAreaView>
  );
};
