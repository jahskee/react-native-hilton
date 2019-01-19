import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import Calendar from 'react-native-calendario';
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";
import {
  MainView,
  ScrollView2,
  Panel1,
  Panel2,
  Panel3,
  Panel4,
  HotelInfo,
  Photo,
  HotelName,
  HotelAddress,
  HotelDiv2,
  HotelDistance,
  HotelPrice,
  LabelDate,
  LabelArrival,
  Arrival,
  DivDate,
  LabelDeparture,
  Departure

} from "./zstyles";
//import CalendarPicker from 'react-native-calendar-picker';
import Dates from 'react-native-dates';
import moment from 'moment';
class BookingScreen extends Component {

  state = {
    date: null,
    focus: 'startDate',
    startDate: null,
    endDate: null
  };

 
  constructor(props) {
    super(props);
    this.hotelInfo = this.props.navigation.getParam("hotelInfo");
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Pick Dates",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  logoImage = "https://cdn2.iconfinder.com/data/icons/fitness-achievement-badges/64/Fitness-14-512.png";
  
  navProceed = () => {
    this.props.navigation.navigate("PaymentScreen", { deck: 100 });
  }

  componentDidMount = () =>  {
    
  }

  image01 = 'https://i.imgur.com/7gQlc4P.png';

  handleCalendarChange = range => {
    console.log(range);
  }
  
  render() {

    const isDateBlocked = (date) =>
    date.isBefore(moment(), 'day');

  const onDatesChange = ({ startDate, endDate, focusedInput }) =>
    this.setState({ ...this.state, focus: focusedInput }, () =>
      this.setState({ ...this.state, startDate, endDate })
    );
    
    return (
     

      
      <MainView>
       
      

          <Panel1>
          <Photo>
                <Image
                  style={{ width: 120,  height: 120 }}
                  source={{
                    uri: this.image01
                  }}
                />
             </Photo>
             <HotelInfo>

                <HotelName>Hilton Checkers Los Angeles</HotelName>
                <HotelAddress>535 South Grand Ave, Los Angeles, CA 90071 US</HotelAddress>
                <HotelDiv2>
                  <HotelDistance>2.5 miles</HotelDistance>
                  <HotelPrice>$185.00</HotelPrice>
                </HotelDiv2>
             
               
             </HotelInfo>
           
          </Panel1>
          <ScrollView2>
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
         
    <Button
        onPress={this.navProceed}
        title="Proceed"
       
        accessibilityLabel="Learn more about this purple button"
      />
        </ScrollView2>
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
)(BookingScreen);
