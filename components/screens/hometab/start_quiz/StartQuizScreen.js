import React, { Component } from "react";
import {
  Animated,
  Text,
  View,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  Picker
} from "react-native";
import {
  MainView,
  ViewQuiz,
  TextSavedMsg,
  TextGroup,
  TextHead,
  TextBody,
  NextBtn,
  TextPageNo,
  CorrectBtn,
  IncorrectBtn
} from "./zstyles";

import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";

class StartQuizScreen extends Component {
  constructor(props) {
    super(props);

    this.deck = this.props.navigation.getParam("deck");
    this.correctCount = 0;

    this.state = {
      isQuestionSelected: false,
      counter: 0
    };
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Quiz",
      headerTintColor: "blue",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  handleClickAnswer = () => {
    this.setState({ isQuestionSelected: true });
  };

  handleClickQuestion = () => {
    this.setState({ isQuestionSelected: false });
  };

  handleClickNext = () => {
    if (this.state.counter === this.deck.questions.length - 1) {
      const percentCorrect = Number(
        (this.correctCount / this.deck.questions.length) * 100
      ).toFixed(1);
      this.props.navigation.navigate("ScoreViewScreen", {
        deck: this.deck,
        percentCorrect
      });
    } else {
      this.setState(prev => ({ counter: prev.counter + 1 }));
    }
  };

  handleClickCorrect = () => {
    if (this.deck.questions[this.state.counter].isCorrect === "Correct") {
      this.correctCount++;
    }
    this.handleClickNext();
  };

  handleClickIncorrect = () => {
    if (this.deck.questions[this.state.counter].isCorrect === "Incorrect") {
      this.correctCount++;
    }
    this.handleClickNext();
  };

  componentWillReceiveProps = () => {
    this.setState({ counter: 0 });
    this.correctCount = 0;
  };

  render() {
    const questions = this.deck.questions;
    const counter = this.state.counter;

    return (
      <MainView>
        <TextPageNo style={{ textAlign: "left" }}>
          {this.state.counter + 1}/{questions.length}
        </TextPageNo>
        <ViewQuiz>
          {!this.state.isQuestionSelected && (
            <View style={{ padding: 10 }}>
              <TextGroup>
                <TextHead> Question: </TextHead>
                <TextBody> {questions[counter].question} </TextBody>
              </TextGroup>
              <TouchableOpacity onPress={this.handleClickAnswer}>
                <TextHead style={{ color: "red", textAlign: "center" }}>
                  {" "}
                  Answer{" "}
                </TextHead>
              </TouchableOpacity>
            </View>
          )}

          {this.state.isQuestionSelected && (
            <View style={{ padding: 10 }}>
              <TextGroup>
                <TextHead> Answer: </TextHead>
                <TextBody> {questions[counter].answer} </TextBody>
              </TextGroup>
              <TouchableOpacity onPress={this.handleClickQuestion}>
                <TextHead style={{ color: "red", textAlign: "center" }}>
                  {" "}
                  Question{" "}
                </TextHead>
              </TouchableOpacity>
            </View>
          )}
          <View style={{ flexDirection: "column", justifyContent: "center" }}>
            <TouchableOpacity onPress={this.handleClickCorrect}>
              <CorrectBtn>Correct</CorrectBtn>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.handleClickIncorrect}>
              <IncorrectBtn>Incorrect</IncorrectBtn>
            </TouchableOpacity>
          </View>
        </ViewQuiz>
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
  // addDeck: _actions.addDeck,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StartQuizScreen);
