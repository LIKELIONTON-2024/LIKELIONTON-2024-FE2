/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {LogBox} from 'react-native';

// 특정 경고 무시 설정
LogBox.ignoreLogs([
  '[Reanimated] Tried to modify key `reduceMotion` of an object which has been already passed to a worklet.',
]);

AppRegistry.registerComponent(appName, () => App);
