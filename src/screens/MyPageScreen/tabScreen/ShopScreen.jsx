import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import {PanGestureHandler} from 'react-native-gesture-handler';
import {useAnimatedGestureHandler} from 'react-native-reanimated';
import {runOnUI} from 'react-native-reanimated';
import BasicHeader from '../../../components/BasicHeader';

const GoBack = require('../../../assets/MyPageIcons/goBack.png');
const Cat = require('../../../assets/cat-base.png');
const ClosetIcon = require('../../../assets/MyPageIcons/goBack.png'); // 옷장 아이콘

// TODO: 상점 해야함! -> 슬라이더 이슈
const ShopScreen = ({navigation}) => {
  const translateY = useSharedValue(0);
  const [showCloset, setShowCloset] = React.useState(false);

  const gestureHandler = useAnimatedGestureHandler({
    onActive: event => {
      'worklet';
      translateY.value = Math.max(0, event.translationY);
    },
    onEnd: () => {
      'worklet';
      if (translateY.value > 100) {
        runOnUI(() => {
          setShowCloset(true);
          translateY.value = withSpring(300, {easing: Easing.out(Easing.exp)});
        })();
      } else {
        translateY.value = withSpring(0);
      }
    },
  });

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateY: translateY.value}],
    };
  });

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <BasicHeader toScreen={'MyPageScreen'} />
      <View style={styles.container}>
        <Image source={Cat} style={styles.catImage} />
        <Text style={styles.text}>상점.</Text>
      </View>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={[styles.closetContainer, animatedStyle]}>
          {showCloset && (
            <View style={styles.closetContent}>
              <Text style={styles.closetTitle}>옷장</Text>
              {/* 여기에 옷장에 대한 내용을 추가할 수 있습니다. */}
              {/* TODO: 옷장 슬라이더 */}
            </View>
          )}
        </Animated.View>
      </PanGestureHandler>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  catImage: {
    width: 301,
    height: 299,
    marginTop: 104,
  },
  text: {
    fontSize: 20,
    marginBottom: 20,
  },
  closetContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 300,
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 16,
    alignItems: 'center',
  },
  closetContent: {
    alignItems: 'center',
  },
  closetTitle: {
    fontSize: 24,
    marginBottom: 10,
  },
  closetIcon: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
});

export default ShopScreen;
