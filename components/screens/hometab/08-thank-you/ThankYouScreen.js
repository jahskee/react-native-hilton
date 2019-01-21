import React, { Component } from "react";
import {
  ScrollView,
  Text,
} from "react-native";

import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";

import HotelHeader from "../_libs/hotel-header/HotelHeader";
import HotelFooter from "../_libs/hotel-footer/HotelFooter";
import {
  MainView,
  TopDivFirst,
  TopText,
  Row,
  Label,
  Value,
} from "./zstyles";

class ThankYouScreen extends Component {
  state ={
    reservation: this.props.userSession.reservations
  }
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
    this.props.navigation.navigate("ReservationScreen");
  };

    /*
store.dispatch(_reservationActions.addReservation({name: 'testing', phone: '541-2333', 
email: 'jahske@ya.com', address: 'address01', arrival: 'Jan 5 2019', departure: 'Jan 7 2019', totalAmount: 120}));
*/
  render() {

    return (
      <MainView>
         
        <HotelHeader hotel={this.props.userSession.selectedHotel}/>
        
        <ScrollView>
        
      
          
            <TopDivFirst>
              <TopText>Reservation Info</TopText>
            </TopDivFirst>
               
            <Row>
              <Label>Name</Label>

              <Value>Jaizon Lubaton</Value>
            </Row>

        
            <Row>
              <Label>Phone</Label>
              <Value>444445555</Value>
            </Row>
            <Row>
              <Label>Email</Label>
              <Value>jahskee@y.com</Value>
            </Row>

         
        
 
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
