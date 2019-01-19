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

import HomeScreen from "./components/screens/hometab/01-home/HomeScreen";

import SettingScreen from "./components/screens/settingtab/setting/SettingScreen";

import MyReservationScreen from "./components/screens/reservationstab/reservation/ReservationScreen";

import SelectDestinationScreen from "./components/screens/hometab/02-select-destination/SelectDestinationScreen";

import PickRoomsScreen from  "./components/screens/hometab/03-pick-rooms/PickRoomsScreen";
import PickDatesScreen from  "./components/screens/hometab/04-pick-dates/PickDatesScreen";
import PaymentScreen from  "./components/screens/hometab/05-payment/PaymentScreen";
import ReviewBookingScreen from  "./components/screens/hometab/06-review-booking/ReviewBookingScreen";
import ThankYouScreen from  "./components/screens/hometab/07-thank-you/ThankYouScreen";
global.log = console.log;

const HomeTab = createStackNavigator(
  {
    HomeScreen,    
    SelectDestinationScreen,
    PickRoomsScreen,
    PickDatesScreen,
    PaymentScreen,
    ReviewBookingScreen,
    ThankYouScreen
  },
  {
     //initialRouteName: "PickDatesScreen",
    initialRouteName: "HomeScreen",
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


const ReservationsTab = createStackNavigator(
  {  
    MyReservationScreen,
  },
  {
    initialRouteName: "MyReservationScreen",
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
    Reservations: ReservationsTab,
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
        } else if (routeName === 'Reservations') {
          iconName = `ios-calendar${focused ? '' : '-outline'}`;
        } 
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: myStyle.primaryColor,
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