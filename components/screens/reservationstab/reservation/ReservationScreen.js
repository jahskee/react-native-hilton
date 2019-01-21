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

        <FlatList
          data={this.props.reservations}
          renderItem={reservation => {
            console.log(reservation)
            return (
              <Reservation>
                <RowHead>
                  <DateRange>{reservation.item.arrival} - {reservation.item.departure}</DateRange>
                </RowHead>
                <RowBody>
                  <Row>
                    <Label> Reservation ID</Label>
                    <Value>{reservation.item.id}</Value>
                  </Row>
                  <Row>
                    <Label> Guest</Label>
                    <Value>{reservation.item.name}</Value>
                  </Row>
                  <Row>
                    <Label> Hotel</Label>
                    <Value>{reservation.item.hotel}</Value>
                  </Row>
                  <Row>
                    <Label> Address</Label>
                    <Value>{reservation.item.address}</Value>
                  </Row>
                </RowBody>
              </Reservation>
            );
          }}
          keyExtractor={item => item.id}
        />
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
