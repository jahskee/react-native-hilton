
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
  
const HotelHeader = props => {
  image01 = 'https://i.imgur.com/7gQlc4P.png';
  return (
    <Panel1>
    <Photo>
          <Image
            style={{ width: 90,  height: 90 }}
            source={{
              uri: this.image01
            }}
          />
       </Photo>
       <HotelInfo>
          <HotelName>Hilton Checkers Los Angeles</HotelName>
          <HotelAddress>535 South Grand Ave, Los Angeles, CA 90071 US <HotelDistance> (2.5 mi) </HotelDistance></HotelAddress>
          
        
       </HotelInfo>
     
    </Panel1>
  );
        
};


export default HotelHeader;