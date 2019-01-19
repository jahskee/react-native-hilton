import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Button, ScrollView } from "react-native";
import Calendar from 'react-native-calendario';
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";
import {
  MainView,
  Panel2,
  Panel3,
  Panel4,
  LabelDate,
  Arrival,
  DivDate,
  CheckinButton,
  Departure

} from "./zstyles";


import HotelHeader from '../_libs/hotel-header/HotelHeader';
import HotelFooter from '../_libs/hotel-footer/HotelFooter';
import Dates from 'react-native-dates';
import moment from 'moment';

class PickDatesScreen extends Component {

  state = {
    date: null,
    focus: 'startDate',
    startDate: null,
    endDate: null
  };

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Pick Dates",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };


  
  handleSubmit = () => {
    if (this.state.startDate === null || this.state.endDate === null) {
      alert('Please select start and end dates');
      return;
    }
    this.props.navigation.navigate("ReviewBookingScreen", { deck: 100 });
  }

  render() {

    const isDateBlocked = (date) =>
    date.isBefore(moment(), 'day');

  const onDatesChange = ({ startDate, endDate, focusedInput }) =>
    this.setState({ ...this.state, focus: focusedInput }, () =>
      this.setState({ ...this.state, startDate, endDate })
    );
    const HotelHeadInfo2 = props => {
       return (
         <Text>Testing</Text>
       )
    }
    return (
      <MainView>
         <HotelHeader/>
         <ScrollView style={{width: '100%', height: 500}}> 
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
                  <Arrival>{this.state.startDate? this.state.startDate.toString().slice(4,15): ''}</Arrival>
             </DivDate>
             <DivDate>
                  <LabelDate>Departure: </LabelDate>
                  <Departure>{this.state.endDate? this.state.endDate.toString().slice(4,15): ''}</Departure>
             </DivDate>
          </Panel3>
      
          <HotelFooter buttonLabel={'Pick Dates'} handleSubmit={this.handleSubmit}/>
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
  updateData: _actions.updateData,
  // addDeck: _actions.addDeck,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PickDatesScreen);
