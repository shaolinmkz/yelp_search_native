# Yelp Native Search


## Setting up an expo app

1. Run `npx expo-cli init <APP_NAME_GOES_HERE> --npm`

2. **Install React Navigation** `npm install react-navigation`

3. **Install Dependencies**

`expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

4. Navigator Hookup

```
  import { createAppContainer, createSwitchNavigator } from 'react-navigation';
  import { createStackNavigator } from 'react-navigation-stack';
  import { createBottomTabNavigator } from 'react-navigation-tabs';
```

