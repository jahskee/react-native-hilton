import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Button, ScrollView } from "react-native";

import { MainView, TextHead, DeckBtn, StartOverBtn } from "./zstyles";
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";
import HotelHeader from '../_libs/hotel-header/HotelHeader';
import HotelFooter from '../_libs/hotel-footer/HotelFooter';
class PickRoomsScreen extends Component {
  constructor(props) {
    super(props);

    this.deck = this.props.navigation.getParam("deck");
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Pick Rooms",
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

  render() {
    return (
      <MainView>
        
         <HotelHeader/>
         <ScrollView>
          <Text>
            Middle
          </Text>
         
         </ScrollView>
         <HotelFooter buttonLabel={'Select Room(s)'} handleSubmit={this.handleSubmit}/>
       
       

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
