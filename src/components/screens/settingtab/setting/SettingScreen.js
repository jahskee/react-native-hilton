/* jshint esversion: 6 */
import React from 'react';
import { View, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import * as _actions from '../../../redux/actions/actions';
import myStyle from '../../../_styles/myStyle';
import { Panel1, HotelInfo } from './zstyles';

class SettingScreen extends React.PureComponent {
  state = {
    image: 'https://i.imgur.com/o7rtJpl.png',
  };

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'My Reservations',
    headerTintColor: myStyle.primaryColor,
  });

  render() {
    const dimensions = Dimensions.get('window');
    const imageHeight = Math.round((dimensions.width * 9) / 16);
    const imageWidth = dimensions.width;
    return (
      <View>
        <Image
          style={{ height: 60, width: imageWidth }}
          source={{
            uri: this.state.image,
          }}
        />

        <Panel1>
          <HotelInfo />
        </Panel1>
      </View>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  userSession: store.userSession,
});

const mapDispatchToProps = {
  updateData: _actions.updateData,
  saveUserSession: _actions.saveUserSession,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SettingScreen);
