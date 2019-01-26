import React, { Component } from 'react';
import { Text, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Dates from 'react-native-dates';
import moment from 'moment';
import * as _actions from '../../../redux/actions/actions';
import myStyle from '../../../_styles/myStyle';
import {
  MainView,
  Panel2,
  Panel3,
  LabelDate,
  Arrival,
  DivDate,
  Departure,
} from './zstyles';

import HotelHeader from '../_libs/hotel-header/HotelHeader';
import HotelFooter from '../_libs/hotel-footer/HotelFooter';
import Compute from '../../../utils/Compute';

class PickDatesScreen extends Component {
  state = {
    date: null,
    focus: 'startDate',
    startDate: null,
    endDate: null,
  };

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Pick Dates',
    headerTintColor: myStyle.primaryColor,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  handleSubmit = () => {
    if (this.state.startDate === null || this.state.endDate === null) {
      alert('Please select start and end dates.');
      return;
    }

    /* -- compute number of nights stay --*/
    let nightsStay = Compute.computeDays(
      this.state.startDate._d,
      this.state.endDate._d,
    );

    nightsStay = nightsStay === 0 ? nightsStay + 1 : nightsStay;
    let totalAmount = 0;
    // update rooms in local session to include subTotal field where nightsStay x room rate.
    const selectedRooms = this.props.userSession.selectedRooms.map((room) => {
      const subTotal = nightsStay * room.price;
      totalAmount += subTotal;
      return {
        ...room,
        nights: nightsStay,
        subTotal: parseInt(subTotal.toFixed(2)),
      };
    });

    this.props.saveUserSession({
      arrival: this.state.startDate.format('MMM D YYYY'),
      departure: this.state.endDate.format('MMM D YYYY'),
      nightsStay,
      selectedRooms,
      totalAmount,
    });

    this.props.navigation.navigate('GuestInfoScreen');
  };

  render() {
    const isDateBlocked = date => date.isBefore(moment(), 'day');

    const onDatesChange = ({ startDate, endDate, focusedInput }) => this.setState({ ...this.state, focus: focusedInput }, () => this.setState({ ...this.state, startDate, endDate }));
    const HotelHeadInfo2 = props => <Text>Testing</Text>;
    return (
      <MainView>
        <ScrollView style={{ width: '100%', height: 500 }}>
          <HotelHeader hotel={this.props.userSession.selectedHotel} />
          <Panel2>
            <Dates
              onDatesChange={onDatesChange}
              isDateBlocked={isDateBlocked}
              startDate={this.state.startDate}
              endDate={this.state.endDate}
              focusedInput={this.state.focus}
              range
            />
          </Panel2>
        </ScrollView>
        <Panel3>
          <DivDate>
            <LabelDate>Arrival: </LabelDate>
            <Arrival>
              {this.state.startDate
                ? this.state.startDate.toString().slice(4, 15)
                : ''}
            </Arrival>
          </DivDate>
          <DivDate>
            <LabelDate>Departure: </LabelDate>
            <Departure>
              {this.state.endDate
                ? this.state.endDate.toString().slice(4, 15)
                : ''}
            </Departure>
          </DivDate>
        </Panel3>

        <HotelFooter
          buttonLabel="Pick Dates"
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
  saveUserSession: _actions.saveUserSession,
  // addDeck: _actions.addDeck,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PickDatesScreen);
