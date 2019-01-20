import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";

import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";

import HotelHeader from "../_libs/hotel-header/HotelHeader";
import HotelFooter from "../_libs/hotel-footer/HotelFooter";

import { MainView, TopDivFirst, TopDiv, TopText, Row, Label, Value } from "./zstyles";

class ReviewBookingScreen extends Component {
  constructor(props) {
    super(props);

    this.deck = this.props.navigation.getParam("deck");
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Confirm Reservation",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  handleSubmit = () => {
    this.props.navigation.navigate("ThankYouScreen", { deck: 100 });
  };

  render() {
    /*
    const name = this.props.userSession.guestInfo.firstName+' '+ this.props.userSession.guestInfo.lastName;
    const address = this.props.userSession.guestInfo.street+', '+this.props.userSession.guestInfo.city+', '+
                    this.props.userSession.guestInfo.state+', '+this.props.userSession.guestInfo.country;
   */

    const name = "Jaizo Lubaton";
    const address = "adsfsf";
    return (
      <MainView>
        <HotelHeader />

        <ScrollView>
          <View>
            <TopDivFirst>
              <TopText>Guest Info</TopText>
            </TopDivFirst>
            <Row>
              <Label>Name</Label>

              <Value>{name}</Value>
            </Row>

            <Row>
              <Label>Address</Label>
              <Value>{address}</Value>
            </Row>
          </View>
          <View>
            <TopDiv>
              <TopText>Hotel Accommodation</TopText>
            </TopDiv>
            <Row>
              <Label>Name</Label>

              <Value>{name}</Value>
            </Row>

            <Row>
              <Label>Address</Label>
              <Value>{address}</Value>
            </Row>
          </View>
        </ScrollView>
        <HotelFooter
          buttonLabel={"Confirm Payment"}
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
  updateData: _actions.updateData
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewBookingScreen);
