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
  Animated,
  Dimensions
} from "react-native";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import ImageOverlay from "react-native-image-overlay";
import * as _actions from "../../../redux/actions/actions";
import {
  MainView,
  TitleText,
  DeckBtn,
  TextBtn,
  TextCards,
  Image2,
  MenuItem,
  MenuRow,
} from "./zstyles";

import StatusBarBackground from "../StatusBarBackground";

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

class FrontDeskScreen extends React.PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Front Desk",
      headerTintColor: "blue",
      headerTitleStyle: {
        fontWeight: "bold"
      },
      header: null
    };
  };

  constructor(props) {
    super(props);

    this.state = {
      opacity: new Animated.Value(1)
    };

    if (this.props.data.runquiz === false) {
      setInterval(function() {
        alert("Please make sure to complete 1 quiz for today");
      }, 24 * 3600 * 1000); // 1 day run notification
    }
  }

  navToAddDeckScreen = async () => {
    this.props.navigation.navigate("AddDeckScreen");
  };

  navToSelectDeck = props => {
    const index = props.item.key;
    const { bgcolor } = this.props.decks[index].style;
    const deck = this.props.decks[index];
    this.props.navigation.navigate("SelectDeckScreen", { deck });
  };

  componentDidMount = () => {
    this.dimensions = Dimensions.get("window");
    this.imageHeight = Math.round((this.dimensions.width * 9) / 16);
    this.imageWidth = this.dimensions.width - 20;

    this.props.addDeckKeys();
  };

  //logoBottom = "https://i.imgur.com/mbwvZcO.png";
  logoImage = "https://i.imgur.com/pAixOoS.png";
  logoBottom = "https://i.imgur.com/aOwucSK.png";
  //logoBottom = "";

  aboutBtn = "https://i.imgur.com/w8t4GQV.png";
  render() {
    return (
      <MainView>
        <StatusBarBackground style={{ backgroundColor: "midnightblue" }} />

        <Image
          style={{
            width: this.imageWidth,
            height: this.imageHeight,
            marginBottom: 0
          }}
          source={{
            uri: this.logoImage
          }}
        />
        <View style={{ margin: 10, width: this.imageWidth, flex:1, flexDirection: 'column', justifyContent: 'space-evenly' }}>
            {/* -----  First Row ----- */}
            <MenuRow>
                  <MenuItem >
                        <Image
                          style={{width: 60, height: 70,}}
                          source={{
                            uri: this.aboutBtn
                          }}
                        />
                  </MenuItem>
                  <MenuItem >
                        <Image
                          style={{width: 60, height: 70,}}
                          source={{
                            uri: this.aboutBtn
                          }}
                        />
                 </MenuItem>

                 <MenuItem >
                        <Image
                          style={{width: 60, height: 70,}}
                          source={{
                            uri: this.aboutBtn
                          }}
                        />
                  </MenuItem>
            </MenuRow>
           
            <MenuRow>
                  <MenuItem >
                        <Image
                          style={{width: 60, height: 70,}}
                          source={{
                            uri: this.aboutBtn
                          }}
                        />
                  </MenuItem>
                  <MenuItem >
                        <Image
                          style={{width: 60, height: 70,}}
                          source={{
                            uri: this.aboutBtn
                          }}
                        />
                 </MenuItem>

                 <MenuItem >
                        <Image
                          style={{width: 60, height: 60,}}
                          source={{
                            uri: this.aboutBtn
                          }}
                        />
                  </MenuItem>
            </MenuRow>

            <MenuRow>
                  <MenuItem >
                        <Image
                          style={{width: 60, height: 70,}}
                          source={{
                            uri: this.aboutBtn
                          }}
                        />
                  </MenuItem>
                  <MenuItem >
                        <Image
                          style={{width: 60, height: 70,}}
                          source={{
                            uri: this.aboutBtn
                          }}
                        />
                 </MenuItem>

                 <MenuItem >
                        <Image
                          style={{width: 60, height: 70,}}
                          source={{
                            uri: this.aboutBtn
                          }}
                        />
                  </MenuItem>
            </MenuRow>
          </View>
       
      </MainView>
    );
  }
}

// ----------- Prop-Types ------
FrontDeskScreen.propTypes = {
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
)(FrontDeskScreen);
