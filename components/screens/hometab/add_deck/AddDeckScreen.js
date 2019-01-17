import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  Animated,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList
} from "react-native";
import { MainView, 
  TitleText, DeckBtn, TextBtn, 
  TextCards, TextQuestion, ViewAddDeck, 
  ListDeckBtn, TextInputDeckName, SubmitBtn, TextDeckMsg,
  TextHead, TextBody,
} from "./zstyles";

import * as _actions from "../../../redux/actions/actions";
import * as _utils from "../../../utils/utils"; 


class AddDeckScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Add Deck",
      headerTintColor: "blue",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  state = {
    deckName: '',
    isSubmitted: false,
  }

  handleSubmitDeck = () => {
   
    const deckName = this.state.deckName;
    if(!deckName) {      
      alert('Please enter Deck Name');
      return;
    }    

    for(let i=0; i < this.props.decks.length; i++) {   
      if(this.props.decks[i].title === this.state.deckName) {
        alert(`Deck '${deckName}' already exist`);
        return;
      }
    }

    const deck =  {title: deckName, questions: [], style:  { bgcolor: new Animated.Value(1) }}
    this.props.addDeck(deck)
    this.props.addDeckKeys();  
    this.props.navigation.navigate('SelectDeckScreen',{ deck });
  }
  
  handleViewDeck = () => {
    this.setState({isSubmitted: false})
    let index =0 ;

    for(let i=0; i < this.props.decks.length; i++) {   
      if(this.props.decks[i].title === this.state.deckName) {
        index = i;
        break;
      }
    }
    const deck = this.props.decks[index];
    this.props.navigation.navigate('SelectDeckScreen',{ deck });
  }

  handleChangeDeckName = (text) => {    
    text = _utils.toTitleCase(text.trim());
    this.setState({deckName: text})
  }

  render() {
    return (
        <MainView>
          {
            !this.state.isSubmitted &&         
              <ViewAddDeck>
              <TextQuestion>What is the Title</TextQuestion>
              <TextQuestion>of your new </TextQuestion>
              <TextQuestion>deck?</TextQuestion>
              <TextInputDeckName value={this.state.deckName} onChangeText={this.handleChangeDeckName}/>
              
              <TouchableOpacity 
                    onPress={this.handleSubmitDeck}
                  >
                    <SubmitBtn>Submit</SubmitBtn>
                </TouchableOpacity>
              </ViewAddDeck>    
          }  
          {
            this.state.isSubmitted &&
            <ViewAddDeck>
                  <TextHead>New Deck</TextHead>

                  <TextBody>{this.state.deckName}</TextBody>

                 <TextDeckMsg>Successfully Saved!</TextDeckMsg>
                 <TouchableOpacity 
                    onPress={this.handleViewDeck}
                  >
                    <SubmitBtn>View Deck</SubmitBtn>
                </TouchableOpacity>
               
            </ViewAddDeck>  
          }
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
  addDeck: _actions.addDeck,
  addDeckKeys: _actions.addDeckKeys,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddDeckScreen);
