import React, { Component } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, Button } from "react-native";

import { MainView, TextHead, DeckBtn, StartOverBtn } from "./zstyles";
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";

import HotelHeader from '../_libs/hotel-header/HotelHeader';
import HotelFooter from '../_libs/hotel-footer/HotelFooter';

class ThankYouScreen extends Component {
  constructor(props) {
    super(props);

    this.deck = this.props.navigation.getParam("deck");
    this.percentCorrect = this.props.navigation.getParam("percentCorrect");

  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Thank You",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  logoImage = "https://cdn2.iconfinder.com/data/icons/fitness-achievement-badges/64/Fitness-14-512.png";
  
  handleSubmit= () => {
    this.props.navigation.navigate("ReservationScreen", { deck: 100 });
  }

  componentDidMount = () =>  {
   
  }

  render() {
    return (
      <MainView>
        
      <HotelHeader/>
      <ScrollView>
          <Text>
            Middle
          </Text>
         
      </ScrollView>
      <HotelFooter buttonLabel={'View My Reservations'} handleSubmit={this.handleSubmit}/>
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
  updateData: _actions.updateData,
  // addDeck: _actions.addDeck,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThankYouScreen);
