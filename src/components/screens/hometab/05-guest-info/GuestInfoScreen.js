import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import {
  Container,
  TopLabel,
  Row,
  Label,
  Input,
  KeyboardAvoidingView2,
} from './zstyles';
import * as _actions from '../../../redux/actions/actions';
import myStyle from '../../../_styles/myStyle';

import HotelHeader from '../_libs/hotel-header/HotelHeader';
import HotelFooter from '../_libs/hotel-footer/HotelFooter';

class ReviewBookingScreen extends Component {
  state = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    street: '',
    city: '',
    state: '',
    country: '',
  };

  static navigationOptions = ({ navigation }) => ({
    headerTitle: 'Guest Info',
    headerTintColor: myStyle.primaryColor,
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  });

  handleChangeFirstName = (text) => {
    this.setState({ firstName: text });
  };

  handleChangeLastName = (text) => {
    this.setState({ lastName: text });
  };

  handleChangePhone = (text) => {
    this.setState({ phone: text });
  };

  handleChangeEmail = (text) => {
    this.setState({ email: text });
  };

  handleChangeStreet = (text) => {
    this.setState({ street: text });
  };

  handleChangeCity = (text) => {
    this.setState({ city: text });
  };

  handleChangeState = (text) => {
    this.setState({ state: text });
  };

  handleChangeCountry = (text) => {
    this.setState({ country: text });
  };

  handleSubmit = () => {
    if (
      this.state.firstName === ''
      || this.state.lastName === ''
      || this.state.phone === ''
      || this.state.email === ''
      || this.state.street === ''
      || this.state.city === ''
      || this.state.state === ''
      || this.state.country === ''
    ) {
      alert('Please enter values on empty fields.');
      return;
    }

    this.props.saveUserSession({
      guestInfo: {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        phone: this.state.phone,
        email: this.state.email,
        street: this.state.street,
        city: this.state.city,
        state: this.state.state,
        country: this.state.country,
      },
    });
    this.props.navigation.navigate('PaymentScreen', { deck: 100 });
  };

  render() {
    return (
      <KeyboardAvoidingView2 style={{ flex: 1 }} behavior="position">
        <ScrollView>
          <HotelHeader hotel={this.props.userSession.selectedHotel} />
          <Container>
            <TopLabel>
              <Text>Please enter your personal info.</Text>
            </TopLabel>
            <Row>
              <Label>First Name</Label>
              <Input
                onChangeText={this.handleChangeFirstName}
                value={this.state.firstName}
              />
            </Row>
            <Row>
              <Label>Last Name</Label>
              <Input
                onChangeText={this.handleChangeLastName}
                value={this.state.lastName}
              />
            </Row>
            <Row>
              <Label>Phone</Label>
              <Input
                onChangeText={this.handleChangePhone}
                value={this.state.phone}
              />
            </Row>
            <Row>
              <Label>Email</Label>
              <Input
                onChangeText={this.handleChangeEmail}
                value={this.state.email}
              />
            </Row>
            <Row>
              <Label>Street</Label>
              <Input
                onChangeText={this.handleChangeStreet}
                value={this.state.street}
              />
            </Row>
            <Row>
              <Label>City</Label>
              <Input
                onChangeText={this.handleChangeCity}
                value={this.state.city}
              />
            </Row>
            <Row>
              <Label>State</Label>
              <Input
                onChangeText={this.handleChangeState}
                value={this.state.state}
              />
            </Row>
            <Row>
              <Label>Country</Label>
              <Input
                onChangeText={this.handleChangeCountry}
                value={this.state.country}
              />
            </Row>

            <HotelFooter
              buttonLabel="Continue"
              handleSubmit={this.handleSubmit}
            />
          </Container>
        </ScrollView>
      </KeyboardAvoidingView2>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#fffd',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
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
)(ReviewBookingScreen);
