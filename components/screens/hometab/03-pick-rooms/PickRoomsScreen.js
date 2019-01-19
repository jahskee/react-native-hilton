import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";

import { MainView, TextHead, DeckBtn, StartOverBtn } from "./zstyles";
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";

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


  logoImage = "https://cdn2.iconfinder.com/data/icons/fitness-achievement-badges/64/Fitness-14-512.png";
  
  navProceed = () => {
    this.props.navigation.navigate("PickDatesScreen", { deck: 100 });
  }

  componentDidMount = () =>  {
 
  }

  render() {
    return (
      <MainView>
        <Image
          style={{ width: 128, height: 128 }}
          source={{
            uri: this.logoImage
          }}
        />
    
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
)(PickRoomsScreen);
