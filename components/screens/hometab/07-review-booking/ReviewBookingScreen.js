import React, { Component } from "react";
import { ScrollView, View, Text } from "react-native";

import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";

import HotelHeader from "../_libs/hotel-header/HotelHeader";
import HotelFooter from "../_libs/hotel-footer/HotelFooter";
import Compute from '../../../utils/Compute';

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
    const userInfo = this.props.userSession;
    const guestInfo = this.props.userSession.guestInfo;
    const hotelInfo = this.props.userSession.selectedHotel;
    const roomsInfo = this.props.userSession.selectedRooms;


    const name = guestInfo.firstName+' '+ guestInfo.lastName;
    const address = guestInfo.street+', '+ guestInfo.city+', '+
                    guestInfo.state+', '+ guestInfo.country;
    const hotelName = hotelInfo.name;
    const hotelAddress = hotelInfo.address;
    const arrival = userInfo.arrival;
    const departure = userInfo.departure;


                    */

    const name = 'sdfadfs';
    const address = 'adfsdfs';
    const hotelName = 'asdfsdfsdf';
    const hotelAddress = 'sdfsdf dsfsdf';
    const arrival = 'Jan 29 2019';
    const departure = 'Feb 2 2019';

    const selectedRooms =[{roomNo: '208',type: 'KingBed', price: 124, nights: Compute.computeDays(arrival, departure), pax: 4, description:'For those who needs a spacious room. This is a great fit for you.'}, 
                    {roomNo: '305', type: 'Twin Bed', price: 120, nights: Compute.computeDays(arrival, departure), pax: 2, description: ''}];
    return (
      <MainView>
        <HotelHeader hotel={this.props.userSession.selectedHotel}/>

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

            {selectedRooms.map( (room, i) => ( 
               <Row key={i}>
                  <Label>Room Reserved {selectedRooms.length===1?'':i+1}</Label>
                  <Value>{'room '+room.roomNo+', '+room.type+', $'+room.price+' rate, '+room.nights+' nights, '+room.pax+' pax, '+room.description}</Value>
               </Row>)) }
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
