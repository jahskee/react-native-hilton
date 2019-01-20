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
  constructor(props) {
    super(props);

    this.deck = this.props.navigation.getParam("deck");
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

  handleSubmit = () => {
    this.props.navigation.navigate("RewviewBookingScreen");
  };

  handleChange = () => {

  }
  state = {
    creditCard: '',
  }
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
                onChangeText={this.handleChange}
                value={this.state.creditCard}
              />
            </Row>
            <Row>
              <Label>Credit Card</Label>
              <Input
                onChangeText={this.handleChange}
                value={this.state.creditCard}
              />
            </Row>
            <View2>
              <Text2>mm</Text2>
              <TextInput2
                onChangeText={this.handleChange}
                value={this.state.creditCard}
              />            

              <Text2>yy</Text2>
              <TextInput2
                onChangeText={this.handleChange}
                value={this.state.creditCard}
              />        

              <Text3>cvv</Text3>
              <TextInput3
                onChangeText={this.handleChange}
                value={this.state.creditCard}
              />        
            </View2>
            <Row>
              <Label>Street</Label>
              <Input
                onChangeText={this.handleChange}
                value={this.state.creditCard}
              />            
            </Row>
            <Row>
              <Label>City</Label>
              <Input
                onChangeText={this.handleChange}
                value={this.state.creditCard}
              />            
            </Row>
            <Row>
              <Label>Zip Code</Label>
              <TextInput4
                onChangeText={this.handleChange}
                value={this.state.creditCard}
              />            
            </Row>
            <Row>
              <Label>State</Label>
              <Input
                onChangeText={this.handleChange}
                value={this.state.creditCard}
              />            
            </Row>
            <Row>
              <Label>Country</Label>
              <Input
                onChangeText={this.handleChange}
                value={this.state.creditCard}
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
