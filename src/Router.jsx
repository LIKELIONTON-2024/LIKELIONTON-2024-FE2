import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {Image} from 'react-native';

import FriendsScreen from './screens/FriendsScreen';
import AuthScreen from './screens/AuthScreen';
import MyPageScreen from './screens/MyPageScreen/MyPageScreen';
import ShopScreen from './screens/MyPageScreen/tabScreen/ShopScreen';
import SettingScreen from './screens/MyPageScreen/tabScreen/SettingScreen';

import {ICONS} from './module/Icons';
import {COLOR} from './module/Color';
// TODO: TabNavigator svg로 수정 노력중~

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// TODO: 인벤토리
const ShopStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ShopScreen" component={ShopScreen} />
  </Stack.Navigator>
);

const SettingStackNavigator = () => (
  <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="SettingScreen" component={SettingScreen} />
  </Stack.Navigator>
);

const MyTabs = () => (
  <Tab.Navigator
    initialRouteName="AuthScreen" // 처음 시작 페이지
    screenOptions={{
      tabBarActiveTintColor: COLOR.YELLOW_400, // 선택된 탭
      tabBarInactiveTintColor: COLOR.GRAY_100, // 선택되지 않은 탭
      tabBarStyle: {
        height: 100,
        backgroundColor: COLOR.BLUE_400,
        borderTopColor: COLOR.YELLOW_400,
        borderTopWidth: 9,
      },
      tabBarLabelStyle: {
        fontWeight: 'bold',
      },
      headerShown: false,
    }}>
    <Tab.Screen
      name="FriendsScreen"
      component={FriendsScreen}
      options={{
        tabBarLabel: '친구 목록',
        tabBarIcon: ({color}) => (
          <Image
            source={ICONS.FRIENDS_TAB}
            style={{width: 35, height: 35, tintColor: color}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="AuthScreen"
      component={AuthScreen}
      options={{
        tabBarLabel: '인증하기',
        tabBarIcon: ({color}) => (
          <Image
            source={ICONS.AUTH_TAB}
            style={{width: 35, height: 35, tintColor: color}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="MyPageScreen"
      component={MyPageScreen}
      options={{
        tabBarLabel: '마이페이지',
        tabBarIcon: ({color}) => (
          <Image
            source={ICONS.MY_PAGE_TAB}
            style={{width: 35, height: 35, tintColor: color}}
          />
        ),
      }}
    />
    <Tab.Screen
      name="ShopStack"
      component={ShopStackNavigator}
      options={{tabBarButton: () => null}}
    />
    <Tab.Screen
      name="SettingStack"
      component={SettingStackNavigator}
      options={{tabBarButton: () => null}}
    />
  </Tab.Navigator>
);

export default MyTabs;
