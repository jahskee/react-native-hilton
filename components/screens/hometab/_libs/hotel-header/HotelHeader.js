
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
          <HotelName>{props.hotel.name}</HotelName>
          <HotelAddress>{props.hotel.address} <HotelDistance> ({props.hotel.distance} mi) </HotelDistance></HotelAddress>
          
        
       </HotelInfo>
     
    </Panel1>
  );
        
};


export default HotelHeader;