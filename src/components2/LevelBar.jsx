import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';

const LevelBar = ({level, maxLevel}) => {
  const progress = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(progress, {
      toValue: (level / maxLevel) * 100,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [level, maxLevel]);

  const widthInterpolate = progress.interpolate({
    inputRange: [0, 100],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>LV. {level}</Text>
        <Text style={styles.rightLabel}>
          다음 레벨까지 {maxLevel - level} 남음
        </Text>
      </View>
      <View style={styles.levelBarBackground}>
        <Animated.View
          style={[styles.levelBarFill, {width: widthInterpolate}]}
        />
      </View>
    </View>
  );
};

// TODO:leverbar 스타일링, 마진, 패딩 등,,
const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  labelContainer: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 23,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 20,
    color: '#fbe56a',
    fontWeight: 'bold',
  },
  rightLabel: {
    fontSize: 9,
    color: '#99999F',
  },
  levelBarBackground: {
    width: 357,
    height: 11,
    backgroundColor: '#e1e1e7',
    borderRadius: 10,
    overflow: 'hidden',
  },
  levelBarFill: {
    height: '100%',
    backgroundColor: '#fbe56a',
  },
});

export default LevelBar;
