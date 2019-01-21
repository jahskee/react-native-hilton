import React, { Component } from "react";
import {
  ScrollView,
  Text,
} from "react-native";

import { MainView, TextHead, DeckBtn, StartOverBtn } from "./zstyles";
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";

import HotelHeader from "../_libs/hotel-header/HotelHeader";
import HotelFooter from "../_libs/hotel-footer/HotelFooter";

class ThankYouScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Reservation Confirmed",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      },
      headerLeft: null
    };
  };

  handleSubmit = () => {
    this.props.navigation.navigate("ReservationScreen", { deck: 100 });
  };


  render() {
    return (
      <MainView>
        <HotelHeader hotel={this.props.userSession.selectedHotel}/>
        <ScrollView>
          <Text>Middle</Text>
        </ScrollView>
        <HotelFooter
          buttonLabel={"View My Reservations"}
          handleSubmit={this.handleSubmit}
        />
      </MainView>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  userSession: store.userSession
});

const mapDispatchToProps = {
  updateData: _actions.updateData,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ThankYouScreen);
