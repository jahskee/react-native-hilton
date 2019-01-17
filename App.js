/*jshint esversion: 6 */
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator,
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Provider } from "react-redux";
import store from "./components/redux/store/store";

import { myStyle } from "./components/_styles/myStyle";

import FrontDeskScreen from "./components/screens/hometab/_frontdesk/FrontDeskScreen";
import SelectDeckScreen from "./components/screens/hometab/select_deck/SelectDeckScreen";
import AddDeckScreen from "./components/screens/hometab/add_deck/AddDeckScreen";

import AddCardScreen from "./components/screens/hometab/add_card/AddCardScreen";

import StartQuizScreen from "./components/screens/hometab/start_quiz/StartQuizScreen";
import ScoreViewScreen from "./components/screens/hometab/score_view/ScoreViewScreen";
/*
import ScoreScreen from "./components/screens/hometab/score/ScoreScreen";
*/
import SettingScreen from "./components/screens/settingtab/setting/SettingScreen";

import FontScreen from "./components/screens/fonttab/font/FontScreen";


global.log = console.log;

const HomeTab = createStackNavigator(
  {
    FrontDeskScreen,    
    AddDeckScreen,
    SelectDeckScreen,
    AddCardScreen,
    StartQuizScreen,
    ScoreViewScreen,
    /*
    ScoreScreen,
    SettingScreen,*/
  },
  {
    initialRouteName: "FrontDeskScreen",
    navigationOptions: {
      headerTintColor: myStyle.primaryColor,
      headerStyle: {
        backgroundColor: myStyle.topBarColor,       
      }
    },    
  }
);

const SettingTab = createStackNavigator(
  {  
    SettingScreen,
  },
  {
    initialRouteName: "SettingScreen",
    navigationOptions: {
      headerTintColor: myStyle.primaryColor,
      headerStyle: {
        backgroundColor: myStyle.topBarColor,       
      }
    },    
  }
);


const FontTab = createStackNavigator(
  {  
    FontScreen,
  },
  {
    initialRouteName: "FontScreen",
    navigationOptions: {
      headerTintColor: myStyle.primaryColor,
      headerStyle: {
        backgroundColor: myStyle.topBarColor,       
      }
    },    
  }
);

const MainTabs = createBottomTabNavigator(
  {    
    Home: HomeTab,       
    Fonts: FontTab,
    Settings: SettingTab,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-home${focused ? '' : '-outline'}`;          
        } else if (routeName === 'Settings') {
          iconName = `ios-construct${focused ? '' : '-outline'}`;
        } else if (routeName === 'Fonts') {
          iconName = `ios-american-football${focused ? '' : '-outline'}`;
        } 
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#2a5089',
      inactiveTintColor: 'gray',
    },
    barStyle: { backgroundColor: myStyle.bottomBarColor },
  }
);

const AppNavigator = createSwitchNavigator({
  Main: MainTabs
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}