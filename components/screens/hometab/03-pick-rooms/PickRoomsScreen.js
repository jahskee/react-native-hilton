import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Button, ScrollView } from "react-native";

import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";
import HotelHeader from '../_libs/hotel-header/HotelHeader';
import HotelFooter from '../_libs/hotel-footer/HotelFooter';

import { 
  MainView, 
  Rooms, Room, 
  RoomHeader, 
  RoomBody,
  RoomPhoto, 
  RoomDescription,
  RoomLeft,
  RoomRight,
  RHLeft,
  RHMid,
  RHRight,

Text2 } from "./zstyles";

class PickRoomsScreen extends Component {
  constructor(props) {
    super(props);

    this.deck = this.props.navigation.getParam("deck");
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Available Rooms",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  
  handleSubmit = () => {
    this.props.navigation.navigate("PickDatesScreen");
  }

  componentDidMount = () =>  {
 
  }
  roomImage = "https://i.imgur.com/DwJ2lTj.png";
  render() {
    return (
      <MainView>
        
         <HotelHeader/>

         <ScrollView style={{width: '100%', height: 500, marginTop: 10}}>
     
         
         <Rooms>
            <Room>
              <RoomLeft>
                <RoomPhoto>
                <Image
                  style={{ width: '100%', height: 75 }}
                  source={{
                    uri: this.roomImage
                  }}
                />
                </RoomPhoto>
              </RoomLeft>
              <RoomRight>
                <RoomHeader>
                  <RHLeft>Room 104</RHLeft>
                  <RHMid>Twin Bed</RHMid>
                  <RHRight>$120</RHRight>
                </RoomHeader>
                <RoomBody>You have the best view of the Atlantic ocean.</RoomBody>
              </RoomRight>
            </Room>
            
            
         </Rooms>
         </ScrollView>
         <HotelFooter buttonLabel={'Select'} handleSubmit={this.handleSubmit}/>
       
       

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
)(PickRoomsScreen);
