/* jshint esversion: 6 */
import React from "react";
import {
  AsyncStorage,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  FlatList,
  Animated
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import * as _actions from "../../../redux/actions/actions";
import {
  MainView,
  TitleText,
  DeckBtn,
  TextBtn,
  TextCards,
  ViewButtonPanel,
  AddDeckBtn,
  ViewListDeck
} from "./zstyles";

const DeckItem = props => {
  const onPress = () => {
    props.navToSelectDeck(props);
  };
  return (
    <Animated.View>
      <DeckBtn onPress={onPress}>
        <TextBtn> {props.item.title} </TextBtn>
        <TextCards>{props.item.questions.length} cards</TextCards>
      </DeckBtn>
    </Animated.View>
  );
};

export const addKeys = (val, key) => ({ key: "" + key, ...val });

class ListDeckScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "List Decks",
      headerTintColor: "blue",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  constructor(props) {
    super(props)

    this.state = {
      opacity: new Animated.Value(1)
    };
  
    if (this.props.data.runquiz === false){
      setInterval(function () {
        alert("Please make sure to complete 1 quiz for today");
         }, 24 * 3600 * 1000) // 1 day run notification
      }
    }
   
  navToAddDeckScreen = async () => {
    this.props.navigation.navigate("AddDeckScreen");
  };

  navToSelectDeck = props => {
    const index = props.item.key;
    const { bgcolor } = this.props.decks[index].style;
    const deck = this.props.decks[index];
    //alert(JSON.stringify(deck))
    /*
    Animated.sequence([
      Animated.timing(bgcolor, {toValue: 2222222, duration: 10}),
      Animated.timing(bgcolor, {toValue: 0, duration: 50})
    ])
   .start();*/
    this.props.navigation.navigate("SelectDeckScreen", { deck });
  };

  componentDidMount = () => {
    this.props.addDeckKeys();
  };

  render() {
    return (
      <MainView>
        <ViewListDeck>
          <FlatList
            renderItem={deck => (
              <DeckItem
                item={deck.item}
                navToSelectDeck={this.navToSelectDeck}
                opacity={this.state.opacity}
              />
            )}
            keyExtractor={(item, index) => index + ""}
            data={this.props.decks}
          />
        </ViewListDeck>
        <TouchableOpacity onPress={this.navToAddDeckScreen}>
          <AddDeckBtn>Add Deck</AddDeckBtn>
        </TouchableOpacity>
      </MainView>
    );
  }
}

// ----------- Prop-Types ------
ListDeckScreen.propTypes = {
  navigation: PropTypes.object.isRequired
};

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  decks: store.decks
});

const mapDispatchToProps = {
  addDeck: _actions.addDeck,
  addDeckKeys: _actions.addDeckKeys
  /*
  clearAnswers,
  updateData,
  getQuestions*/
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListDeckScreen);
