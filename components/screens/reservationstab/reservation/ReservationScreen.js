/*jshint esversion: 6 */
import React from "react";
import { Button, View, StyleSheet, Text, ScrollView } from "react-native";

import { myStyle } from "../../../_styles/myStyle";
import { styles } from "./zstyles";

class ReservationScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "My Reservations",
      headerTintColor: myStyle.primaryColor
    };
  };

  render() {
    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "lightgray"
        }}
      >
    
      </View>
    );
  }
}

export default ReservationScreen;
