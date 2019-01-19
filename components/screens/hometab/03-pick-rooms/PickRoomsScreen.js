import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Button, ScrollView } from "react-native";

import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";
import HotelHeader from '../_libs/hotel-header/HotelHeader';
import HotelFooter from '../_libs/hotel-footer/HotelFooter';

import { RoomDiv } from './parts/Room';

import { 
  MainView, 
  Rooms
} from "./zstyles";

class PickRoomsScreen extends Component {

  state = {
    rooms:[
      {roomNo: '104', type: 'Twin Bed', price: 120,
       description: 'You have the best view of the Atlantic ocean. This room can accomodate 4 pax.',
       pax: 4, image: "https://i.imgur.com/DwJ2lTj.png",
      },
      {roomNo: '105', type: 'Single Bed', price: 100,
      description: 'A panoramic view of the city. This room can accomodate 2 pax.',
      pax: 2,  image: "https://i.imgur.com/16KB8eq.png",
     }
    ]
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

  handleRoomSelect = () => {
   
    alert('room selected');
 }
 
  render() {
    return (
      <MainView>
        
         <HotelHeader/>

         <ScrollView style={{width: '100%', height: 500, marginTop: 10}}>
     
         
         <Rooms>
           <RoomDiv room={this.state.rooms[0]} handleRoomSelect={this.handleRoomSelect} />
           <RoomDiv room={this.state.rooms[1]} handleRoomSelect={this.handleRoomSelect} />
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
