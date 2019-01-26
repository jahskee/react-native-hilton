import React, { Component } from 'react';
import { ScrollView, FlatList } from 'react-native';

import { connect } from 'react-redux';
import * as _roomActions from '../../../redux/actions/roomActions';
import * as _actions from '../../../redux/actions/actions';
import myStyle from '../../../_styles/myStyle';
import HotelHeader from '../_libs/hotel-header/HotelHeader';
import HotelFooter from '../_libs/hotel-footer/HotelFooter';

import { RoomDiv } from './parts/Room';

import { MainView, Rooms } from './zstyles';

class PickRoomsScreen extends Component {
  static navigationOptions = () => ({
    headerTitle: 'Available Rooms',
    headerTintColor: myStyle.primaryColor,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  handleRoomSelect = (roomNo) => {
    const newRooms = this.props.rooms.map((room) => {
      if (room.roomNo === roomNo) {
        return { ...room, isSelected: !room.isSelected };
      }
      return room;
    });
    this.props.toggleRoomSelected(roomNo);
  };

  handleSubmit = () => {
    const selectedRooms = this.props.rooms.filter(room => room.isSelected);
    if (selectedRooms.length === 0) {
      alert('Please book one or more room(s).');
      return;
    }

    this.props.saveUserSession({ selectedRooms });
    this.props.navigation.navigate('PickDatesScreen');
  };

  componentDidMount() {
    this.props.saveUserSession({ selectedRooms: [] });
    this.props.resetRoomsSelection();
  }

  render() {
    return (
      <MainView>
        <ScrollView style={{ width: '100%', height: 500, marginTop: 10 }}>
          <HotelHeader hotel={this.props.userSession.selectedHotel} />
          <Rooms>
            <FlatList
              data={this.props.rooms}
              renderItem={room => (
                <RoomDiv
                  room={room.item}
                  handleRoomSelect={this.handleRoomSelect}
                />
              )}
              keyExtractor={item => item.roomNo}
            />
          </Rooms>
        </ScrollView>
        <HotelFooter buttonLabel="Book Now" handleSubmit={this.handleSubmit} />
      </MainView>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  rooms: store.rooms,
  userSession: store.userSession,
});

const mapDispatchToProps = {
  updateData: _actions.updateData,
  toggleRoomSelected: _roomActions.toggleRoomSelected,
  resetRoomsSelection: _roomActions.resetRoomsSelection,
  saveUserSession: _actions.saveUserSession,
  // addDeck: _actions.addDeck,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PickRoomsScreen);
