import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";

import { MainView, TextHead, DeckBtn, StartOverBtn } from "./zstyles";
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";

class ThankYouScreen extends Component {
  constructor(props) {
    super(props);

    this.deck = this.props.navigation.getParam("deck");
    this.percentCorrect = this.props.navigation.getParam("percentCorrect");

  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Thank You",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  logoImage = "https://cdn2.iconfinder.com/data/icons/fitness-achievement-badges/64/Fitness-14-512.png";
  
  navProceed = () => {

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
)(ThankYouScreen);
