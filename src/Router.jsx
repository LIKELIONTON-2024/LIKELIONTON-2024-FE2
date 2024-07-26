import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FriendList from './pages/FriendList';
import Certification from './pages/Certification';
import MyPage from './pages/MyPage';
import Splash from './pages/Splash';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Agree from './pages/Agree';
import SplashLogin from './pages/SplashLogin';
import CustomBottomTab from './components/CustomBottomTab';
import ShopScreen from './pages/tabScreen/ShopScreen';
import SettingScreen from './pages/tabScreen/SettingScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// 바텀탭
const renderBottomBar = props => <CustomBottomTab {...props} />;

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

// 홈, 커뮤니티, 도구, 마이페이지
const MainTab = () => {
  return (
    <Tab.Navigator
      tabBar={renderBottomBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen name="FriendList" component={FriendList} />
      <Tab.Screen name="Certification" component={Certification} />
      <Tab.Screen name="MyPage" component={MyPage} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="MainTab" component={MainTab} />
      <Stack.Screen name="Agree" component={Agree} />
      <Stack.Screen name="SplashLogin" component={SplashLogin} />
      <Stack.Screen name="ShopStack" component={ShopStackNavigator} />
      <Stack.Screen name="SettingStack" component={SettingStackNavigator} />
    </Stack.Navigator>
  );
};

export default Router;
