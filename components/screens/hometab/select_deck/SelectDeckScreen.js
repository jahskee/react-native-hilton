import React, { Component } from "react";
import {
  Animated,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";

import {
  MainView,
  ViewDeck,
  TextTitle,
  TextCount,
  SubmitBtn,
  ListDeckBtn,
  AddCardBtn,
  StartQuizBtn
} from "./zstyles";

class SelectDeckScreen extends Component {
  constructor(props) {
    super(props);
    const deck = this.props.navigation.getParam("deck");
    this.state = { deck };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Select Deck",
      headerTintColor: "blue",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  handleClickListDeckScreen = () => {
    this.props.navigation.navigate("ListDeckScreen");
  };

  handleAddCard = evt => {
    this.props.navigation.navigate("AddCardScreen", { deck: this.state.deck });
  };

  handleStartQuiz = evt => {
    if (this.state.deck.questions.length === 0) {
      alert("Cannot start quiz with 0 card.");
      return;
    }

    this.props.navigation.navigate("StartQuizScreen", {
      deck: this.state.deck
    });
  };

  render() {
    return (
      <MainView>
        <ViewDeck>
          <TextTitle>{this.state.deck.title}</TextTitle>
          <TextCount>{this.state.deck.questions.length} cards</TextCount>

          <TouchableOpacity onPress={this.handleAddCard}>
            <AddCardBtn>Add Card</AddCardBtn>
          </TouchableOpacity>

          <TouchableOpacity onPress={this.handleStartQuiz}>
            <StartQuizBtn>Start Quiz</StartQuizBtn>
          </TouchableOpacity>
        </ViewDeck>
      </MainView>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  decks: store.decks
});

const mapDispatchToProps = {
  addDeck: _actions.addDeck
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SelectDeckScreen);
