import {SafeAreaView, Text, View} from 'react-native';
import {COLOR} from '../libs/Color';

export default () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLOR.WHITE}}>
      <Text>리스트</Text>
    </SafeAreaView>
  );
};
