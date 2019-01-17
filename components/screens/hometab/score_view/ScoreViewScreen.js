import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";

import { MainView, TextHead, DeckBtn, StartOverBtn } from "./zstyles";
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";

class ScoreViewScreen extends Component {
  constructor(props) {
    super(props);

    this.deck = this.props.navigation.getParam("deck");
    this.percentCorrect = this.props.navigation.getParam("percentCorrect");

    this.state = {
      percentCorrect: this.percentCorrect
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Score",
      headerTintColor: "blue",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  navToDeckScreen = () => {
    this.props.navigation.navigate("SelectDeckScreen");
  };

  navToStartOverScreen = () => {
    this.props.navigation.navigate("StartQuizScreen", { deck: this.deck });
  };

  logoImage = "https://cdn2.iconfinder.com/data/icons/fitness-achievement-badges/64/Fitness-14-512.png";
  
  componentDidMount = () =>  {
    this.props.updateData({quizrun: true})
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
        <TextHead>Your Score Is</TextHead>
        <TextHead>{this.state.percentCorrect}% Correct</TextHead>

        <TouchableOpacity onPress={this.navToDeckScreen}>
          <DeckBtn>View Deck</DeckBtn>
        </TouchableOpacity>

        <TouchableOpacity onPress={this.navToStartOverScreen}>
          <StartOverBtn>Start Again</StartOverBtn>
        </TouchableOpacity>
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
)(ScoreViewScreen);
