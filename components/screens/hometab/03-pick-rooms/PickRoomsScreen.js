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
  state = {
    rooms: [
      {
        roomNo: "104",
        type: "Twin Bed",
        price: 120,
        description:
          "You have the best view of the Atlantic ocean. This room can accomodate 4 pax.",
        pax: 4,
        image: "https://i.imgur.com/DwJ2lTj.png"
      },
      {
        roomNo: "105",
        type: "Single Bed",
        price: 104,
        description:
          "A panoramic view of the city. This room can accomodate 2 pax.",
        pax: 2,
        image: "https://i.imgur.com/16KB8eq.png"
      },
      {
        roomNo: "200",
        type: "King Bed",
        price: 140,
        description:
          "For those who needs a spacious room. This room can accomodate 2 pax.",
        pax: 2,
        image: "https://i.imgur.com/IVBzHhY.png"
      },
      {
        roomNo: "305",
        type: "King Bed",
        price: 105,
        description:
          "For those who needs a spacious room. This room can accomodate 2 pax.",
        pax: 2,
        image: "https://i.imgur.com/F8ppoyb.png"
      },
      {
        roomNo: "414",
        type: "King Bed",
        price: 132,
        description:
          "For those who needs a spacious room. This room can accomodate 2 pax.",
        pax: 2,
        image: "https://i.imgur.com/wiSvQTU.png"
      },
      {
        roomNo: "512",
        type: "King Bed",
        price: 116,
        description:
          "For those who needs a spacious room. This room can accomodate 2 pax.",
        pax: 2,
        image: "https://i.imgur.com/rDYYKLR.png"
      },
      {
        roomNo: "603",
        type: "King Bed",
        price: 156,
        description:
          "For those who needs a spacious room. This room can accomodate 2 pax.",
        pax: 2,
        image: "https://i.imgur.com/O5uX5AP.png"
      }
    ]
  };

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
    const newRooms = this.state.rooms.map(room => {
      if (room.roomNo === roomNo) {
        return { ...room, isSelected: !room.isSelected };
      } else {
        return room;
      }
    });
    this.setState({ rooms: newRooms });
  };

  handleSubmit = () => {
    const selectedRooms = this.state.rooms.filter(room => {
      return room.isSelected;
    });
    if (selectedRooms.length === 0) {
      alert("Please book one or more room(s).");
      return;
    }
    this.props.navigation.navigate("PickDatesScreen");
  };
  render() {
    return (
      <MainView>
        <HotelHeader />

        <ScrollView style={{ width: "100%", height: 500, marginTop: 10 }}>
          <Rooms>
            <FlatList
              data={this.state.rooms}
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
  data: store.data
  //   decks: store.decks
});

const mapDispatchToProps = {
  updateData: _actions.updateData
  // addDeck: _actions.addDeck,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PickRoomsScreen);
