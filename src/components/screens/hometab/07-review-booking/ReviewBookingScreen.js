import React, { PureComponent } from 'react';
import { ScrollView, View, Dimensions } from 'react-native';

import { connect } from 'react-redux';
import * as _actions from '../../../redux/actions/actions';
import * as _reservationActions from '../../../redux/actions/reservationActions';
import myStyle from '../../../_styles/myStyle';

import HotelHeader from '../_libs/hotel-header/HotelHeader';
import HotelFooter from '../_libs/hotel-footer/HotelFooter';

import {
  MainView,
  TopDivFirst,
  TopDiv,
  TopText,
  Row,
  Label,
  Value,
  SubTotal,
  Total,
} from './zstyles';

class ReviewBookingScreen extends PureComponent {
  state = {};

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Confirm Reservation',
    headerTintColor: myStyle.primaryColor,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  handleSubmit = () => {
    this.props.addReservation(this.reservation).then(() => {
      this.props.navigation.navigate('ThankYouScreen');
    });
  };

  componentDidMount() {
    const userInfo = this.props.userSession;
    const guestInfo = this.props.userSession.guestInfo;
    const hotelInfo = this.props.userSession.selectedHotel;

    const name = `${guestInfo.firstName} ${guestInfo.lastName}`;
    const phone = guestInfo.phone;
    const email = guestInfo.email;
    const address = `${guestInfo.street}, ${guestInfo.city}, ${
      guestInfo.state
    }, ${guestInfo.country}`;
    const hotelName = hotelInfo.name;
    const hotelAddress = hotelInfo.address;
    const arrival = userInfo.arrival;
    const departure = userInfo.departure;
    const totalAmount = userInfo.totalAmount;

    this.setState({
      name,
      phone,
      address,
      email,
      totalAmount,
      hotelName,
      hotelAddress,
      arrival,
      departure,
    });

    this.reservation = {
      name,
      phone,
      email,
      hotel: hotelName,
      address: hotelAddress,
      arrival,
      departure,
      totalAmount,
    };
  }

  dimensions = Dimensions.get('window');

  render() {
    return (
      <MainView>
        <ScrollView
          style={{
            width: this.dimensions.width,
          }}
        >
          <HotelHeader hotel={this.props.userSession.selectedHotel} />

          <View>
            <TopDivFirst>
              <TopText>Guest Info</TopText>
            </TopDivFirst>
            <Row>
              <Label>Name</Label>

              <Value>{this.state.name}</Value>
            </Row>

            <Row>
              <Label>Address</Label>
              <Value>{this.state.address}</Value>
            </Row>
            <Row>
              <Label>Phone</Label>
              <Value>{this.state.phone}</Value>
            </Row>
            <Row>
              <Label>Email</Label>
              <Value>{this.state.email}</Value>
            </Row>
          </View>

          <View>
            <TopDivFirst>
              <TopText>Payment Info</TopText>
            </TopDivFirst>

            <Row>
              <Label>Total Amount</Label>

              <Value>
                <Total>
$
                  {parseInt(this.state.totalAmount).toFixed(2)}
                </Total>
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
              <Value>{this.state.hotelName}</Value>
            </Row>
            <Row>
              <Label>Address</Label>
              <Value>{this.state.hotelAddress}</Value>
            </Row>
            <Row>
              <Label>Arrival</Label>
              <Value>{this.state.arrival}</Value>
            </Row>
            <Row>
              <Label>Departure</Label>
              <Value>{this.state.departure}</Value>
            </Row>
            {console.log(this.state.selectedRooms)}
}
            {this.props.userSession.selectedRooms.map((room, i) => (
              <Row key={i}>
                <Label>
                  Room Reserved
                  {' '}
                  {this.props.userSession.selectedRooms.length === 1
                    ? ''
                    : i + 1}
                </Label>
                <Value>
                  {`room ${room.roomNo}, ${room.type}, $${room.price} rate, ${
                    room.nights
                  } nights, ${room.pax} pax, ${room.description}`}
                  <SubTotal>
                    ($
                    {parseInt(room.subTotal).toFixed(2)}
)
                  </SubTotal>
                </Value>
              </Row>
            ))}
          </View>
        </ScrollView>
        <HotelFooter buttonLabel="Payment" handleSubmit={this.handleSubmit} />
      </MainView>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  userSession: store.userSession,
});

const mapDispatchToProps = {
  updateData: _actions.updateData,
  addReservation: _reservationActions.addReservation,
  saveUserSession: _actions.saveUserSession,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ReviewBookingScreen);
