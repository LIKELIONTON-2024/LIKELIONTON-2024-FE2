import React from 'react';
import {View, useWindowDimensions, StyleSheet, Text, Image} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useNavigation} from '@react-navigation/native';

import {MY_PAGE_ICONS} from '../../libs/Icons';
import {COLOR} from '../../libs/Color';

import CalendarScreen from '../tabScreen/CalendarScreen';
import ActivitiesScreen from '../tabScreen/ActivitiesScreen';
// import InventoryScreen from '../tabScreen/InventoryScreen';
// 일단 인벤토리 지움

const IndicatorImage = require('../../assets/images/indicator.png');

const TabSection = () => {
  const navigation = useNavigation();
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'calendar', title: '기록', icon: MY_PAGE_ICONS.CALENDAR_TAB},
    {key: 'activities', title: '내 활동', icon: MY_PAGE_ICONS.ACTIVITY_TAB},
    {key: 'shop', title: '상점', icon: MY_PAGE_ICONS.SHOP_TAB},
    // {key: 'inventory', title: '인벤토리', icon: MY_PAGE_ICONS.INVENTORY_TAB},
  ]);

  const handleTabPress = tab => {
    if (tab.key === 'shop') {
      navigation.navigate('ShopStack');
    } else {
      setIndex(routes.findIndex(route => route.key === tab.key));
    }
  };

  const renderScene = SceneMap({
    calendar: CalendarScreen,
    activities: ActivitiesScreen,
    shop: () => null,
    // inventory: InventoryScreen,
  });

  const renderTabBar = props => {
    const {navigationState} = props;
    const tabWidth = 357 / routes.length;
    const indicatorWidth = 58;
    const indicatorPosition =
      (tabWidth - indicatorWidth) / 2 + index * tabWidth;
    return (
      <View style={styles.tabBarContainer}>
        <TabBar
          {...props}
          style={styles.tabBar}
          renderLabel={({route}) => (
            <View style={styles.tabLabelContainer}>
              <Image source={route.icon} style={[styles.icon]} />
              <Text style={[styles.tabLabel]}>{route.title}</Text>
            </View>
          )}
          indicatorStyle={styles.indicator}
          onTabPress={({route}) => handleTabPress(route)}
        />
        <Image
          source={IndicatorImage}
          style={[styles.indicatorImage, {left: indicatorPosition}]}
        />
      </View>
    );
  };

  return (
    <View style={styles.tabViewContainer}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    position: 'relative',
    zIndex: 10, // Ensure this is on top of other elements
  },
  tabBar: {
    backgroundColor: COLOR.GRAY_100,
    borderRadius: 20,
    width: 357,
    height: 62,
    overflow: 'hidden',
  },
  tabLabelContainer: {
    alignItems: 'center',
    width: 35,
    height: 46,
  },
  tabLabel: {
    color: COLOR.BLACK,
    fontSize: 10,
    top: 2,
  },
  icon: {
    width: 34,
    height: 34,
    resizeMode: 'contain',
  },
  indicator: {
    backgroundColor: COLOR.TRANSPARENT,
  },
  indicatorImage: {
    position: 'absolute',
    bottom: -4,
    width: 58,
    height: 7,
    resizeMode: 'contain',
    zIndex: 11,
  },
  tabViewContainer: {
    flex: 1,
    zIndex: 10,
  },
});

export default TabSection;
