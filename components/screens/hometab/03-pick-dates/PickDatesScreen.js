import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";
import Calendar from 'react-native-calendario';
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";

import {
  MainView,
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

} from "./zstyles";

class BookingScreen extends Component {
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
          <Panel2>
             <Calendar
                  onChange={ this.handleCalendarChange }
                  showWeekdays={false}
                  minDate="2018-04-20"
                  startDate="2018-04-30"
                  endDate="2018-05-05"
                
                  theme={{
                    weekColumnTextStyle: {
                      color: 'red',
                    },
                    weekColumnStyle: {
                      paddingVertical: 20,
                    },
                    weekColumnsContainerStyle: {
                      backgroundColor: 'lightgrey',
                    },
                    monthTitleStyle: {
                      color: 'blue',
                    },
                    nonTouchableDayContainerStyle: {
                      backgroundColor: '#babfb5',
                    },
                    nonTouchableDayTextStyle: {
                      color: 'whitesmoke',
                    },
                    dayTextStyle: {
                      color: '#7c6d6d',
                    },
                    activeDayContainerStyle: {
                      backgroundColor: 'green',
                    },
                    activeDayTextStyle: {
                      color: 'whitesmoke',
                    },
                  }}
                />
          </Panel2>
          <Panel3>
             <Text>panel 3</Text>
          </Panel3>
         
    <Button
        onPress={this.navProceed}
        title="Proceed"
       
        accessibilityLabel="Learn more about this purple button"
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
  updateData: _actions.updateData,
  // addDeck: _actions.addDeck,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingScreen);
