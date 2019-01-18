/* jshint esversion: 6 */
import React from "react";
import { Button, View, StyleSheet, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { myStyle } from "../../../_styles/myStyle";
import { styles } from "./zstyles";

class SettingScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "My Settings",
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

// ------- PropTypes ---------
SettingScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

// -------- Setup Redux --------
const mapStateToProps = state => ({});
const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SettingScreen);
