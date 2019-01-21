/*jshint esversion: 6 */
import React from "react";
import {
  Button,
  View,
  Image,
  Text,
  Dimensions,
  ScrollView,
  FlatList
} from "react-native";
import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import * as _reservationActions from "../../../redux/actions/reservationActions";
import { myStyle } from "../../../_styles/myStyle";
import {
  Reservation,
  RowHead,
  ImageLogo,
  DateRange,
  RowBody,
  Value,
  Label,
  Row
} from "./zstyles";

class ReservationScreen extends React.PureComponent {
  state = {
    image: "https://i.imgur.com/o7rtJpl.png"
  };
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "My Reservations",
      headerTintColor: myStyle.primaryColor
    };
  };

  componentDidMount() {
    this.props.fetchReservations();
  }
  render() {
    const dimensions = Dimensions.get("window");
    const imageHeight = Math.round((dimensions.width * 9) / 16);
    const imageWidth = dimensions.width;
    return (
      <View>
        <ImageLogo
          style={{ height: 60, width: imageWidth }}
          source={{
            uri: this.state.image
          }}
        />

        <ScrollView>
          <FlatList
            data={this.props.reservations.slice(0, 20)}
            renderItem={reservation => {
              return (
                <Reservation>
                  <RowHead>
                    <DateRange>Jan 24 2019 - Jan 30 2019</DateRange>
                  </RowHead>
                  <RowBody>
                    <Row>
                      <Label> Reservation ID</Label>
                      <Value>sdfsdfsdfsdf</Value>
                    </Row>
                    <Row>
                      <Label> Guest</Label>
                      <Value>Jaizon Lubaton</Value>
                    </Row>
                    <Row>
                      <Label> Hotel</Label>
                      <Value>DoubleTrea Hlton</Value>
                    </Row>
                    <Row>
                      <Label> Address</Label>
                      <Value>6850 Hwigha, CA 33333 US</Value>
                    </Row>
                  </RowBody>
                </Reservation>
              );
            }}
            keyExtractor={item => item.id}
          />
        </ScrollView>
      </View>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data,
  userSession: store.userSession,
  reservations: store.reservations
});

const mapDispatchToProps = {
  updateData: _actions.updateData,
  saveUserSession: _actions.saveUserSession,
  fetchReservations: _reservationActions.fetchReservations
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReservationScreen);
