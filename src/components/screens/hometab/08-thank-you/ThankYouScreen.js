import React, { PureComponent } from 'react';
import { ScrollView, Dimensions } from 'react-native';

import { connect } from 'react-redux';
import * as _actions from '../../../redux/actions/actions';
import myStyle from '../../../_styles/myStyle';

import HotelHeader from '../_libs/hotel-header/HotelHeader';
import HotelFooter from '../_libs/hotel-footer/HotelFooter';
import {
  MainView, TopDivFirst, TopText, Row, Label, Value,
} from './zstyles';

class ThankYouScreen extends PureComponent {
  static navigationOptions = () => ({
    headerTitle: 'Reservation Confirmed',
    headerTintColor: myStyle.primaryColor,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    headerLeft: null,
  });

  state = {};

  handleSubmit = () => {
    this.props.navigation.navigate('ReservationScreen');
  };

  componentDidMount() {
    const reservation = this.props.userSession.reservation;
    this.setState({ ...reservation });
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
          <TopDivFirst>
            <TopText>Please print this information.</TopText>
          </TopDivFirst>
          <Row>
            <Label>Reservation ID</Label>

            <Value>{this.state.id}</Value>
          </Row>
          <Row>
            <Label>Name</Label>

            <Value>{this.state.name}</Value>
          </Row>

          <Row>
            <Label>Phone</Label>
            <Value>{this.state.phone}</Value>
          </Row>
          <Row>
            <Label>Email</Label>
            <Value>{this.state.email}</Value>
          </Row>
          <Row>
            <Label>Hotel</Label>
            <Value>{this.state.hotel}</Value>
          </Row>
          <Row>
            <Label>Hotel Address</Label>
            <Value>{this.state.address}</Value>
          </Row>
          <Row>
            <Label>Arrival</Label>
            <Value>{this.state.arrival}</Value>
          </Row>
          <Row>
            <Label>Departure</Label>
            <Value>{this.state.departure}</Value>
          </Row>
          <Row>
            <Label>Amount paid</Label>
            <Value>
$
              {parseInt(this.state.totalAmount).toFixed(2)}
            </Value>
          </Row>
        </ScrollView>

        <HotelFooter
          buttonLabel="View My Reservations"
          handleSubmit={this.handleSubmit}
        />
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
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ThankYouScreen);
