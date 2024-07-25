import {SafeAreaView, Text, View} from 'react-native';
import {COLOR} from '../module/Color';

export default () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR.WHITE}}>
      <Text>인증</Text>
    </SafeAreaView>
  );
};
