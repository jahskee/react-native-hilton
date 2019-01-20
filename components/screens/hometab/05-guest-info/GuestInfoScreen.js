import React, { Component } from "react";
import { ScrollView, View, Text, TextInput, Image, TouchableOpacity, Button } from "react-native";

import { MainView, Container, TopLabel, Row, Label, Input } from "./zstyles";
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";

import HotelHeader from '../_libs/hotel-header/HotelHeader';
import HotelFooter from '../_libs/hotel-footer/HotelFooter';


class ReviewBookingScreen extends Component {
  constructor(props) {
    super(props);

    this.deck = this.props.navigation.getParam("deck");
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Guest Info",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  
  handleSubmit = () => {
    this.props.navigation.navigate("PaymentScreen", { deck: 100 });
  }

  render() {
    /*
    const user={
      location: this.props.userSession.selectedLocation,
      hotelName: this.props.userSession.selectedHotel.name,
      hotelAddress: this.props.userSession.selectedHotel.address,
      arrivalDate: this.props.userSession.arrival.splice(10,16),
      departureDate: this.props.userSession.departure.splice(10,16),
      rooms: this.props.userSession.selectedRooms
    }*/
    return (
      <MainView>
        
      <HotelHeader/>
        <ScrollView style={{marginTop: 20}}>

        <Container>
          <TopLabel> 
                <Text>Please enter your personal info.</Text>
          </TopLabel>
          <Row>
              <Label>First Name</Label>
              <Input />
          </Row>
          <Row>
              <Label>Last Name</Label>
              <Input />
          </Row>
          <Row>
              <Label>Street</Label>
              <Input />
          </Row>
          <Row>
              <Label>City</Label>
              <Input />
          </Row>
          <Row>
              <Label>State</Label>
              <Input />
          </Row>
          <Row>
              <Label>Country</Label>
              <Input />
          </Row>

     
        </Container>
        </ScrollView>
      <HotelFooter buttonLabel={'Continue'} handleSubmit={this.handleSubmit}/>
     </MainView>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  userSession: store.userSession 
  //   decks: store.decks
});

const mapDispatchToProps = {
  updateData: _actions.updateData,
  // addDeck: _actions.addDeck,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewBookingScreen);
