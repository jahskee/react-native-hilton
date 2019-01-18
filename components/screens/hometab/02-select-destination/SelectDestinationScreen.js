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

  state = {
    locations: [
      {
        locationName: 'Los Angeles, CA',
        hotels: [
          { 
            name: 'Hilton Los Angeles Airport',
            address: '5711 W Century Blvd, Los Angeles, CA 90041',
            price: 110.50,
            image: 'https://cdn2.iconfinder.com/data/icons/fitness-achievement-badges/64/Fitness-14-512.png',
          }, 
          { 
            name: 'DoubleTree Los Angeles',
            address: '535 South Grand Avenue, Los Angeles, CA 90071 US',
            price: 89.10,
            image: 'https://cdn2.iconfinder.com/data/icons/fitness-achievement-badges/64/Fitness-14-512.png',
          },
        ]
      },
      {

      }
  
    ]
   ,
    hello: 'hello'
  };


  constructor(props) {
    super(props);
    this.deck = this.props.navigation.getParam("deck");
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
            <Destination hotel={ this.state.locations[0].hotels[0] }/>
            <Destination hotel={ this.state.locations[0].hotels[1] } />
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
