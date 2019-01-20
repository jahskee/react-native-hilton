import React, { Component } from "react";
import {
  View,
  Text,
  ScrollView,
  TextInput,
  Image,
  TouchableOpacity,
  Button
} from "react-native";

import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";

import HotelHeader from "../_libs/hotel-header/HotelHeader";
import HotelFooter from "../_libs/hotel-footer/HotelFooter";

import { MainView, Container, TopLabel, Row, Label, Input, Text2, Text3, TextInput2, TextInput3, TextInput4,   View2 } from "./zstyles";

class PaymentScreen extends Component {

  state = {
    name: '',
    creditCard: '',
    month: '',
    year: '',
    cvv: '',
    street: '',
    city: '',
    zipCode: '',
    state: '',
    country: '',
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Payment",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  handleChangeName = (text) => {
    this.setState({ name: text });
  }

  handleChangeCreditCard = (text) => {
    this.setState({ creditCard: text });
  }

  handleChangeCCMonth = (text) => {
    this.setState({ month: text });
  }

  handleChangeCCYear = (text) => {
    this.setState({ year: text });
  }

  handleChangeCVV = (text) => {
    this.setState({ cvv: text });
  }

  handleChangeStreet = (text) => {
    this.setState({ street: text });
  }

  handleChangeCity = (text) => {
    this.setState({ city: text });
  }

  handleChangeZipCode = (text) => {
    this.setState({ zipCode: text });
  }

  handleChangeState = (text) => {
    this.setState({ state: text });
  }

  handleChangeCountry = (text) => {
    this.setState({ country: text });
  }
  
  handleSubmit = () => {

    if (this.state.name === "" ||
      this.state.creditCard === "" ||
      this.state.month === "" ||
      this.state.year === "" ||
      this.state.cvv === "" ||
      this.state.street === "" ||
      this.state.city === "" ||
      this.state.zipCode === "" ||
      this.state.state === "" ||
      this.state.country === "" ) {
         alert("Please enter values on empty fields.");
      return;
    }

    
    this.props.navigation.navigate("RewviewBookingScreen");
  };

  render() {
    return (
      <MainView>
        <HotelHeader />
        <ScrollView style={{ marginTop: 20 }}>
          <Container>
            <TopLabel>
              <Text>Please enter your personal info.</Text>
            </TopLabel>
            <Row>
              <Label>Name on Card</Label>
              <Input
                onChangeText={this.handleChangeName}
                value={this.state.name}
              />
            </Row>
            <Row>
              <Label>Credit Card</Label>
              <Input
                onChangeText={this.handleChangeCreditCard}
                value={this.state.creditCard}
              />
            </Row>
            <View2>
              <Text2>mm</Text2>
              <TextInput2
                onChangeText={this.handleChangeCCMonth}
                value={this.state.month}
              />            

              <Text2>yy</Text2>
              <TextInput2
                onChangeText={this.handleChangeCCYear}
                value={this.state.year}
              />        

              <Text3>cvv</Text3>
              <TextInput3
                onChangeText={this.handleChangeCVV}
                value={this.state.cvv}
              />        
            </View2>
            <Row>
              <Label>Street</Label>
              <Input
                onChangeText={this.handleChangeStreet}
                value={this.state.street}
              />            
            </Row>
            <Row>
              <Label>City</Label>
              <Input
                onChangeText={this.handleChangeCity}
                value={this.state.city}
              />            
            </Row>
            <Row>
              <Label>Zip Code</Label>
              <TextInput4
                onChangeText={this.handleChangeZipCode}
                value={this.state.zipCode}
              />            
            </Row>
            <Row>
              <Label>State</Label>
              <Input
                onChangeText={this.handleChangeState}
                value={this.state.state}
              />            
            </Row>
            <Row>
              <Label>Country</Label>
              <Input
                onChangeText={this.handleChangeCountry}
                value={this.state.country}
              />            
            </Row>
          </Container>
        </ScrollView>
        <HotelFooter
          buttonLabel={"Continue"}
          handleSubmit={this.handleSubmit}
        />
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
)(PaymentScreen);
