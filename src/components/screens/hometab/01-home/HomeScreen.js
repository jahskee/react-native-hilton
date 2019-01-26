/* jshint esversion: 6 */
import React from 'react';
import {
  ScrollView,
  Image,
  Dimensions,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as _actions from '../../../redux/actions/actions';
import myStyle from '../../../_styles/myStyle';
import {
  MainView, MenuItem, MenuRow, MenuView,
} from './zstyles';

export const addKeys = (val, key) => ({ key: `${key}`, ...val });

class HomeScreen extends React.PureComponent {
  static navigationOptions = () => ({
    headerTitle: 'Home',
    headerTintColor: myStyle.primaryColor,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  constructor(props) {
    super(props);

    this.dimensions = Dimensions.get('window');
    this.imageHeight = Math.round((this.dimensions.width * 9) / 16);
    this.imageWidth = this.dimensions.width - 20;
    this.menuImageDimension = { width: 60, height: 75 };

    this.logoImage = 'https://i.imgur.com/pAixOoS.png';
    this.aboutBtn = 'https://i.imgur.com/1H8iyQf.png';
    this.bookNowBtn = 'https://i.imgur.com/P8dpmLP.png';
    this.galleryBtn = 'https://i.imgur.com/HWF6YLL.png';
    this.locationBtn = 'https://i.imgur.com/U4slGhj.png';
    this.roomsBtn = 'https://i.imgur.com/IFQnA32.png';
    this.amenityBtn = 'https://i.imgur.com/VqeQ2Vl.png';
    this.diningBtn = 'https://i.imgur.com/vK0Qr12.png';
    this.feedbackBtn = 'https://i.imgur.com/PNIoeQe.png';
    this.moreBtn = 'https://i.imgur.com/hrNRq6Z.png';
  }

  selectDestination = () => {
    this.props.navigation.navigate('SelectDestinationScreen', { deck: 100 });
  };

  render() {
    return (
      <MainView>
        <Image
          style={{
            width: this.imageWidth,
            height: this.imageHeight,
            marginBottom: 0,
          }}
          source={{
            uri: this.logoImage,
          }}
        />
        <ScrollView>
          <MenuView
            style={{
              margin: 10,
              width: this.imageWidth,
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}
          >
            {/* -----  First Row ----- */}
            <MenuRow>
              <MenuItem>
                <Image
                  style={this.menuImageDimension}
                  source={{
                    uri: this.aboutBtn,
                  }}
                />
              </MenuItem>
              <MenuItem>
                <TouchableHighlight onPress={this.selectDestination}>
                  <Image
                    style={this.menuImageDimension}
                    source={{
                      uri: this.bookNowBtn,
                    }}
                  />
                </TouchableHighlight>
              </MenuItem>

              <MenuItem>
                <Image
                  style={this.menuImageDimension}
                  source={{
                    uri: this.galleryBtn,
                  }}
                />
              </MenuItem>
            </MenuRow>

            <MenuRow>
              <MenuItem>
                <Image
                  style={this.menuImageDimension}
                  source={{
                    uri: this.locationBtn,
                  }}
                />
              </MenuItem>
              <MenuItem>
                <Image
                  style={this.menuImageDimension}
                  source={{
                    uri: this.roomsBtn,
                  }}
                />
              </MenuItem>

              <MenuItem>
                <Image
                  style={this.menuImageDimension}
                  source={{
                    uri: this.amenityBtn,
                  }}
                />
              </MenuItem>
            </MenuRow>

            <MenuRow>
              <MenuItem>
                <Image
                  style={this.menuImageDimension}
                  source={{
                    uri: this.diningBtn,
                  }}
                />
              </MenuItem>
              <MenuItem>
                <Image
                  style={this.menuImageDimension}
                  source={{
                    uri: this.feedbackBtn,
                  }}
                />
              </MenuItem>

              <MenuItem>
                <Image
                  style={this.menuImageDimension}
                  source={{
                    uri: this.moreBtn,
                  }}
                />
              </MenuItem>
            </MenuRow>
          </MenuView>
        </ScrollView>
      </MainView>
    );
  }
}

// ----------- Prop-Types ------
HomeScreen.propTypes = {
  navigation: PropTypes.object.isRequired,
};

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  decks: store.decks,
});

const mapDispatchToProps = {
  addDeck: _actions.addDeck,
  addDeckKeys: _actions.addDeckKeys,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreen);
