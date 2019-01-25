/*jshint esversion: 6 */
import React from "react";
import {
  createStackNavigator,
  createSwitchNavigator,
  createBottomTabNavigator
} from "react-navigation";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Provider } from "react-redux";
import store from "./src/components/redux/store/store";

import myStyle from "./src/components/_styles/myStyle";

import HomeScreen from "./src/components/screens/hometab/01-home/HomeScreen";
import SettingScreen from "./src/components/screens/settingtab/setting/SettingScreen";
import ReservationScreen from "./src/components/screens/reservationstab/reservation/ReservationScreen";

/*---- Home tab screens ----*/
import SelectDestinationScreen from "./src/components/screens/hometab/02-select-destination/SelectDestinationScreen";
import PickRoomsScreen from "./src/components/screens/hometab/03-pick-rooms/PickRoomsScreen";
import PickDatesScreen from "./src/components/screens/hometab/04-pick-dates/PickDatesScreen";
import GuestInfoScreen from "./src/components/screens/hometab/05-guest-info/GuestInfoScreen";
import PaymentScreen from "./src/components/screens/hometab/06-payment/PaymentScreen";
import ReviewBookingScreen from "./src/components/screens/hometab/07-review-booking/ReviewBookingScreen";
import ThankYouScreen from "./src/components/screens/hometab/08-thank-you/ThankYouScreen";

global.log = console.log;

const HomeTab = createStackNavigator(
  {
    HomeScreen,
    SelectDestinationScreen,
    PickRoomsScreen,
    PickDatesScreen,
    PaymentScreen,
    GuestInfoScreen,
    ReviewBookingScreen,
    ThankYouScreen
  },
  {
    initialRouteName: "HomeScreen",
    navigationOptions: {
      headerTintColor: myStyle.primaryColor,
      headerStyle: {
        backgroundColor: myStyle.topBarColor
      }
    }
  }
);

const SettingTab = createStackNavigator(
  {
    SettingScreen
  },
  {
    initialRouteName: "SettingScreen",
    navigationOptions: {
      headerTintColor: myStyle.primaryColor,
      headerStyle: {
        backgroundColor: myStyle.topBarColor
      }
    }
  }
);

const ReservationsTab = createStackNavigator(
  {
    ReservationScreen
  },
  {
    initialRouteName: "ReservationScreen",
    navigationOptions: {
      headerTintColor: myStyle.primaryColor,
      headerStyle: {
        backgroundColor: myStyle.topBarColor
      }
    }
  }
);

const MainTabs = createBottomTabNavigator(
  {
    Home: HomeTab,
    Reservations: ReservationsTab,
    Settings: SettingTab
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "Home") {
          iconName = `ios-home${focused ? "" : "-outline"}`;
        } else if (routeName === "Settings") {
          iconName = `ios-settings${focused ? "" : "-outline"}`;
        } else if (routeName === "Reservations") {
          iconName = `ios-calendar${focused ? "" : "-outline"}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      }
    }),
    tabBarOptions: {
      activeTintColor: myStyle.primaryColor,
      inactiveTintColor: "gray"
    },
    barStyle: { backgroundColor: myStyle.bottomBarColor }
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
