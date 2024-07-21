# feature-myPageScreen

## Dependencies

- `@react-navigation/bottom-tabs` ^6.6.1
  - 하단 탭 네비게이션을 위한 패키지
- `@react-navigation/native` ^6.1.18
  - React Navigation의 기본 네비게이션 패키지
- `@react-navigation/native-stack` ^6.10.1
  - 네이티브 스택 네비게이션을 위한 패키지
- `@react-navigation/stack` ^6.4.1
  - 스택 네비게이션을 위한 패키지
- `react` 18.2.0
  - React 라이브러리
- `react-native` 0.74.3
  - React Native 프레임워크
- `react-native-calendars` ^1.1305.0
  - 캘린더 컴포넌트를 위한 패키지
- `react-native-gesture-handler` ^2.17.1
  - 제스처 처리를 위한 패키지
- `react-native-pager-view` ^6.3.3
  - 페이지 뷰를 위한 패키지
- `react-native-reanimated` ^3.14.0
  - 애니메이션을 위한 패키지
- `react-native-safe-area-context` ^4.10.8
  - 안전 영역을 고려한 레이아웃을 위한 패키지
- `react-native-screens` ^3.32.0
  - 네이티브 스크린 컴포넌트를 위한 패키지
- `react-native-svg-transformer` ^1.5.0
  - SVG 이미지를 변환하여 사용할 수 있게 해주는 패키지
- `react-native-tab-view` ^3.5.2
  - 탭 뷰 컴포넌트를 위한 패키지
- `react-native-vector-icons` ^10.1.0
  - 벡터 아이콘을 위한 패키지

## File Structure

```plaintext
src
├── \010Router.jsx
├── assets
│   ├── Icons
│   │   ├── BottomTabIcons
│   │   │   ├── authTab.png
│   │   │   ├── emoji-happy.svg
│   │   │   ├── friendsTab.png
│   │   │   ├── ghost.svg
│   │   │   ├── heart-add.svg
│   │   │   └── myPageTab.png
│   │   └── goBack.png
│   ├── MyPageIcons
│   │   ├── activities.png
│   │   ├── badge.png
│   │   ├── calendar.png
│   │   ├── detail-arrow.png
│   │   ├── indicator.png
│   │   ├── inventory.png
│   │   ├── left-arrow.png
│   │   ├── line.png
│   │   ├── right-arrow.png
│   │   ├── setting.png
│   │   └── shop.png
│   └── cat-base.png
├── components
│   ├── BasicHeader.jsx
│   ├── CalendarLocaleConfig.jsx
│   ├── CalendarModal.jsx
│   ├── ConsecutiveDaysDisplay.jsx
│   ├── CustomArrows.jsx
│   ├── DetailArrow.jsx
│   └── LevelBar.jsx
├── module
│   ├── Color.js
│   └── Icons.js
├── screens
│   ├── AuthScreen.jsx
│   ├── FriendsScreen.jsx
│   └── MyPageScreen
│       ├── MyPageScreen.jsx
│       ├── section
│       │   ├── ProfileSection.jsx
│       │   ├── SettingSection.jsx
│       │   └── TabSection.jsx
│       ├── settingScreen
│       │   └── ProfileSection.jsx
│       └── tabScreen
│           ├── ActivitiesScreen.jsx
│           ├── CalendarScreen.jsx
│           ├── InventoryScreen.jsx
│           ├── SettingScreen.jsx
│           └── ShopScreen.jsx
└── utils
    └── dateUtils.jsx
```
