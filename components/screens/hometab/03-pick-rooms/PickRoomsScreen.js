import React, { Component } from "react";
import {
  ScrollView,
  FlatList
} from "react-native";

import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";
import HotelHeader from "../_libs/hotel-header/HotelHeader";
import HotelFooter from "../_libs/hotel-footer/HotelFooter";

import { RoomDiv } from "./parts/Room";

import { MainView, Rooms } from "./zstyles";

class PickRoomsScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Available Rooms",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  handleRoomSelect = roomNo => {
    const newRooms = this.props.rooms.map(room => {
      if (room.roomNo === roomNo) {
        return { ...room, isSelected: !room.isSelected };
      } else {
        return room;
      }
    });
    this.props.toggleRoomSelected(roomNo);
  };

  handleSubmit = () => {
    const selectedRooms = this.props.rooms.filter(room => {
      return room.isSelected;
    });
    if (selectedRooms.length === 0) {
      alert("Please book one or more room(s).");
      return;
    }
    this.props.navigation.navigate("PickDatesScreen");
  };

  componentDidMount() {
    console.log(JSON.stringify(this.props.rooms))
   
  }
  render() {
    return (
      <MainView>
        <HotelHeader />
        <ScrollView style={{ width: "100%", height: 500, marginTop: 10 }}>
          <Rooms>
            <FlatList
              data={this.props.rooms}
              renderItem={room => {
                return (
                  <RoomDiv
                    room={room.item}
                    handleRoomSelect={this.handleRoomSelect}
                  />
                );
              }}
              keyExtractor={item => item.roomNo}
            />
          </Rooms>
        </ScrollView>
        <HotelFooter buttonLabel={"Book Now"} handleSubmit={this.handleSubmit} />
      </MainView>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  rooms: store.rooms
  //   decks: store.decks
});

const mapDispatchToProps = {
  updateData: _actions.updateData,
  toggleRoomSelected: _actions.toggleRoomSelected
  // addDeck: _actions.addDeck,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PickRoomsScreen);
