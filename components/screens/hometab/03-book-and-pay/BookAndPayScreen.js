import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";

import { connect } from "react-redux";
import * as _actions from "../../../redux/actions/actions";
import { myStyle } from "../../../_styles/myStyle";

import {
  MainView,
  Panel1,
  Panel2,
  Panel3,
  Panel4,
  HotelInfo,
  Photo,
  HotelName,
  HotelAddress,
  HotelDistance,
  HotelPrice,
} from "./zstyles";

class BookAndPayScreen extends Component {
  constructor(props) {
    super(props);
    this.hotelInfo = this.props.navigation.getParam("hotelInfo");
  }

  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: "Payment",
      headerTintColor: myStyle.primaryColor,
      headerTitleStyle: {
        fontWeight: "bold"
      }
    };
  };

  logoImage = "https://cdn2.iconfinder.com/data/icons/fitness-achievement-badges/64/Fitness-14-512.png";
  
  navProceed = () => {
    this.props.navigation.navigate("ReviewBookingScreen", { deck: 100 });
  }

  componentDidMount = () =>  {
    
  }

  image01 = 'https://i.imgur.com/7gQlc4P.png';
  
  render() {
    return (
      <MainView>
       
      

          <Panel1>
          <Photo>
                <Image
                  style={{ width: 120,  height: 120 }}
                  source={{
                    uri: this.image01
                  }}
                />
             </Photo>
             <HotelInfo>

                <HotelName>Hilton Checkers Los Angeles</HotelName>
                <HotelAddress>535 South Grand Ave, Los Angeles, CA 90071 US</HotelAddress>
                <HotelDistance><Text>2.5 miles</Text></HotelDistance>
               
             </HotelInfo>
           
          </Panel1>
          <Panel2>
             <Text>panel 2</Text>
          </Panel2>
          <Panel3>
             <Text>panel 3</Text>
          </Panel3>
          <Panel4>
             <Text>panel 4</Text>
          </Panel4>
    <Button
        onPress={this.navProceed}
        title="Proceed"
       
        accessibilityLabel="Learn more about this purple button"
      />
      </MainView>
    );
  }
}

// ---------- Setup Redux -------------
const mapStateToProps = store => ({
  data: store.data
  //   decks: store.decks
});

const mapDispatchToProps = {
  updateData: _actions.updateData,
  // addDeck: _actions.addDeck,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookAndPayScreen);
