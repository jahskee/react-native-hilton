import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";

import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";
import { Dropdown } from "react-native-material-dropdown";
import { Destination } from "./parts/Destination";

import {
  MainView,
  Destinations,
  TopPanel,
  BottomPanel,
} from "./zstyles";

class SelectDestinationScreen extends Component {
  constructor(props) {
    super(props);

    this.deck = this.props.navigation.getParam("deck");
    this.state = {
      percentCorrect: this.percentCorrect
    };
  }

  dropDownData = [{ value: "Los Angeles, CA" }, { value: "Washington DC" }];
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Select Destination",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };



  navProceed = () => {
    this.props.navigation.navigate("BookAndPayScreen", { deck: 100 });
  };

  componentDidMount = () => {
    this.props.updateData({ quizrun: true });
  };

  render() {
    return (
      <MainView>
        <TopPanel>
          <Dropdown
            label="Select Destination"
            data={this.dropDownData}
            containerStyle={{ width: "90%" }}
          />
          <Destinations>
            <Destination/>
            <Destination />
          </Destinations>
        </TopPanel>

        <BottomPanel>
          <Button
            onPress={this.navProceed}
            title="Proceed"
            accessibilityLabel="Learn more about this purple button"
          />
        </BottomPanel>
      </MainView>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data
  //   decks: store.decks
});

const mapDispatchToProps = {
  updateData: _actions.updateData
  // addDeck: _actions.addDeck,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectDestinationScreen);
