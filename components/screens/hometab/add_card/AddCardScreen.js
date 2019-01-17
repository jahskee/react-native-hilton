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
  Picker,
  KeyboardAvoidingView
} from "react-native";
import { connect } from "react-redux";

import {
  MainView,
  TitleText,
  DeckBtn,
  TextBtn,
  TextCards,
  TextQuestion,
  TextAnswer,
  ViewAddCard,
  TextIsCorrect,
  ViewQA,
  ListDeckBtn,
  TextInputQuestion,
  TextInputAnswer,
  SubmitBtn,
  TextSavedMsg,
  TextGroup,
  TextHead,
  TextHeadMain,
  TextBody
} from "./zstyles";

import * as _actions from "../../../redux/actions/actions";
import * as _utils from "../../../utils/utils";

class AddCardScreen extends Component {
  constructor(props) {
    super(props);

    const deck = this.props.navigation.getParam("deck");

    this.state = {
      question: "",
      answer: "",
      isCorrect: "Correct",
      isSaved: false,
      deck
    };
  }
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Add Card",
      headerTintColor: "blue",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  handleSubmit = () => {
    if (!this.state.question.trim()) {
      alert("Please enter Question.");
      return;
    }

    if (!this.state.answer.trim()) {
      alert("Please enter Answer.");
      return;
    }

    this.props.addCard({
      deckName: this.state.deck.title,
      question: this.state.question.trim(),
      answer: this.state.answer.trim(),
      isCorrect: this.state.isCorrect
    });

    this.setState({ isSaved: true });
  };

  handleAddNewCard = () => {
    this.setState({
      question: "",
      answer: "",
      isCorrect: "Correct",
      isSaved: false
    });
    this.setState({ isSaved: false });
  };

  handleChangeQuestion = text => {
    text = _utils.toTitleCase(text.trim());
    this.setState({ question: text });
  };

  handleChangeAnswer = text => {
    text = _utils.toTitleCase(text.trim());
    this.setState({ answer: text });
  };

  render() {
    return (
      <MainView>
        <TextHeadMain>Deck: {this.state.deck.title}</TextHeadMain>
        <ViewAddCard>
          {!this.state.isSaved && (
            <KeyboardAvoidingView>
              <TextQuestion>Question:</TextQuestion>
              <TextInputQuestion
                value={this.state.question}
                onChangeText={this.handleChangeQuestion}
              />

              <TextAnswer>Answer:</TextAnswer>
              <TextInputQuestion
                value={this.state.answer}
                onChangeText={this.handleChangeAnswer}
              />
              <KeyboardAvoidingView>
                <TextIsCorrect>Is correct?</TextIsCorrect>
                <Picker
                  style={{ margin: 0, padding: 0 }}
                  selectedValue={this.state.isCorrect}
                  onValueChange={(itemValue, itemIndex) =>
                    this.setState({ isCorrect: itemValue })
                  }
                >
                  <Picker.Item label="Correct" value="Correct" />
                  <Picker.Item label="Incorrect" value="Incorrect" />
                </Picker>
              </KeyboardAvoidingView>
            </KeyboardAvoidingView>
          )}

          {this.state.isSaved && (
            <ViewQA>
              <TextGroup>
                <TextHead>Question:</TextHead>
                <TextBody>{this.state.question}</TextBody>
              </TextGroup>

              <TextGroup>
                <TextHead>Answer:</TextHead>
                <TextBody>{this.state.answer}</TextBody>
              </TextGroup>

              <TextGroup>
                <TextHead>Is Correct?</TextHead>
                <TextBody>{this.state.isCorrect}</TextBody>
              </TextGroup>
            </ViewQA>
          )}

          {this.state.isSaved && (
            <View>
              <TextSavedMsg style={{ textAlign: "center" }}>
                New Card Saved!
              </TextSavedMsg>
            </View>
          )}

          {!this.state.isSaved && (
            <TouchableOpacity onPress={this.handleSubmit}>
              <SubmitBtn>Submit</SubmitBtn>
            </TouchableOpacity>
          )}

          {this.state.isSaved && (
            <TouchableOpacity onPress={this.handleAddNewCard}>
              <SubmitBtn>Add More Card</SubmitBtn>
            </TouchableOpacity>
          )}
        </ViewAddCard>
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
  addCard: _actions.addCard
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCardScreen);
