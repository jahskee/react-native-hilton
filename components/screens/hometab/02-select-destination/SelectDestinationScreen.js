import React, { Component } from "react";
import { FlatList } from "react-native";

import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";
import { Dropdown } from "react-native-material-dropdown";
import { Destination } from "./parts/Destination";

import {
  MainView,
  Destinations,
  TopPanel,
} from "./zstyles";

import data from '../../../_data/data';

class SelectDestinationScreen extends Component {

  state = {
    locations: data.locations,
    selectedLocation: 0,
  };


  constructor(props) {
    super(props);
    this.deck = this.props.navigation.getParam("deck");
    
  }

  dropDownData = [
    { value: this.state.locations[0].locationName }, 
    { value: this.state.locations[1].locationName }
  ];

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Select Destination",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  handleOnChangeLocation =  (text) => {
    let selectedLocation;
    if (text === 'Los Angeles, CA') {
      selectedLocation = 0;
    } else if (text === 'Washington, DC') {
      selectedLocation = 1;
    }

    this.setState({selectedLocation});

  }

  componentDidMount = () => {
    this.props.updateData({ quizrun: true });
  };

  render() {
   
    return (
      <MainView>
       
        <TopPanel>
         
          <Dropdown
            label='Where are you going?'
            value='Los Angeles, CA'           
            data={this.dropDownData}
            containerStyle={{ width: "90%" }}
            onChangeText = { this.handleOnChangeLocation}
          />
          <Destinations>
             <FlatList
              data={this.state.locations[this.state.selectedLocation].hotels}
              renderItem={ (hotel) => {
                  return (   <Destination hotel={ hotel.item } navigation={this.props.navigation} />)
              }}

              keyExtractor = {(item) => item.id}
             />

      
           
          </Destinations>
        </TopPanel>
       
     
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
)(SelectDestinationScreen);
