import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";

import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";

import HotelHeader from "../_libs/hotel-header/HotelHeader";
import HotelFooter from "../_libs/hotel-footer/HotelFooter";
import Compute from "../../../utils/Compute";

import {
  MainView,
  TopDivFirst,
  TopDiv,
  TopText,
  Row,
  Label,
  Value,
  SubTotal,
  Total
} from "./zstyles";

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
    const userInfo = this.props.userSession;
    const guestInfo = this.props.userSession.guestInfo;
    const hotelInfo = this.props.userSession.selectedHotel;
    const name = guestInfo.firstName + " " + guestInfo.lastName;
    const phone = guestInfo.phone;
    const email = guestInfo.email;
    const address =
      guestInfo.street +
      ", " +
      guestInfo.city +
      ", " +
      guestInfo.state +
      ", " +
      guestInfo.country;
    const hotelName = hotelInfo.name;
    const hotelAddress = hotelInfo.address;
    const arrival = userInfo.arrival;
    const departure = userInfo.departure;
    const totalAmount = this.props.userSession.totalAmount;
    const selectedRooms = userInfo.selectedRooms;

    /*    
    const name = 'sdfadfs';
    const address = 'adfsdfs';
    const hotelName = 'asdfsdfsdf';
    const hotelAddress = 'sdfsdf dsfsdf';
    const arrival = 'Jan 29 2019';
    const departure = 'Feb 2 2019';
    const totalAmount = 450;

    const selectedRooms =[{roomNo: '208',type: 'KingBed', price: 124, nights: 2, subTotal: 120, pax: 4, description:'For those who needs a spacious room. This is a great fit for you.'}, 
                    {roomNo: '305', type: 'Twin Bed', price: 120, nights: 2, subTotal: 169, pax: 2, description: ''}];
                        */

    return (
      <MainView>
        <HotelHeader hotel={this.props.userSession.selectedHotel} />

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
            <Row>
              <Label>Phone</Label>
              <Value>{phone}</Value>
            </Row>
            <Row>
              <Label>Email</Label>
              <Value>{email}</Value>
            </Row>
          </View>

          <View>
            <TopDivFirst>
              <TopText>Payment Info</TopText>
            </TopDivFirst>
            <Row>
              <Label>Total Amount</Label>

              <Value>
                <Total>${totalAmount.toFixed(2)}</Total>
              </Value>
            </Row>

            <Row>
              <Label>Credit Card #</Label>
              <Value>***********3456</Value>
            </Row>
          </View>
          
          <View>
            <TopDiv>
              <TopText>Hotel Accommodation</TopText>
            </TopDiv>
            <Row>
              <Label>Hotel Name</Label>
              <Value>{hotelName}</Value>
            </Row>

            <Row>
              <Label>Address</Label>
              <Value>{hotelAddress}</Value>
            </Row>

            <Row>
              <Label>Arrival</Label>
              <Value>{arrival}</Value>
            </Row>
            <Row>
              <Label>Departure</Label>
              <Value>{departure}</Value>
            </Row>

            {selectedRooms.map((room, i) => (
              <Row key={i}>
                <Label>
                  Room Reserved {selectedRooms.length === 1 ? "" : i + 1}
                </Label>
                <Value>
                  {"room " +
                    room.roomNo +
                    ", " +
                    room.type +
                    ", $" +
                    room.price +
                    " rate, " +
                    room.nights +
                    " nights, " +
                    room.pax +
                    " pax, " +
                    room.description}
                  <SubTotal>(${room.subTotal})</SubTotal>
                </Value>
              </Row>
            ))}
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
