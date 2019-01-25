import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { connect } from 'react-redux';
import { Dropdown } from 'react-native-material-dropdown';
import * as _actions from '../../../redux/actions/actions';
import myStyle from '../../../_styles/myStyle';
import { Destination } from './parts/Destination';

import { MainView, Destinations, TopPanel } from './zstyles';

import data from '../../../_data/data';

class SelectDestinationScreen extends Component {
  state = {
    locations: data.locations,
    selectedLocation: 0,
  };

  dropDownData = [
    { value: this.state.locations[0].locationName },
    { value: this.state.locations[1].locationName },
  ];

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Select Destination',
    headerTintColor: myStyle.primaryColor,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  handleOnChangeLocation = (text) => {
    let locationIndex;
    if (text === 'Los Angeles, CA') {
      locationIndex = 0;
    } else if (text === 'Washington, DC') {
      locationIndex = 1;
    }
    this.props.saveUserSession({
      selectedLocation: text,
      locationIndex,
    });
  };

  handleSelectHotel = (hotel) => {
    this.props.saveUserSession({
      selectedHotel: hotel,
    });
  };

  render() {
    return (
      <MainView>
        <TopPanel>
          <Dropdown
            label="Where are you going?"
            value="Los Angeles, CA"
            data={this.dropDownData}
            containerStyle={{ width: '90%' }}
            onChangeText={this.handleOnChangeLocation}
          />
          <Destinations>
            <FlatList
              data={
                this.state.locations[this.props.userSession.locationIndex]
                  .hotels
              }
              renderItem={hotel => (
                <Destination
                  hotel={hotel.item}
                  handleSelectHotel={this.handleSelectHotel}
                  navigation={this.props.navigation}
                />
              )}
              keyExtractor={item => item.id}
            />
          </Destinations>
        </TopPanel>
      </MainView>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  userSession: store.userSession,
  hotels: store.hotels,
  city: store.city,
});

const mapDispatchToProps = {
  updateData: _actions.updateData,
  saveUserSession: _actions.saveUserSession,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectDestinationScreen);
