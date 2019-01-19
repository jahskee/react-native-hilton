import React from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";

import {
    Panel1,
    HotelInfo,
    Photo,
    HotelName,
    HotelAddress,
    HotelDiv2,
    HotelDistance,
    HotelPrice,
} from "./zstyles";
  
const HotelHeadInfo = props => {
  image01 = 'https://i.imgur.com/7gQlc4P.png';
  return (
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
          <HotelDiv2>
            <HotelDistance>2.5 miles</HotelDistance>
            <HotelPrice>$185.00</HotelPrice>
          </HotelDiv2>
       </HotelInfo>
     
    </Panel1>
  );
        
};


export default HotelHeadInfo;