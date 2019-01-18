import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";

import {
  DestinationItem,
  HotelName,
  HotelDesc,
  HotelPhotoPrice,
  Photo,
  Price,
} from "./zstyles";
  
export const Destination = props => {
  const onPress = () => {
   
  };
  
  logoImage = "https://cdn2.iconfinder.com/data/icons/fitness-achievement-badges/64/Fitness-14-512.png";

  return (
    <DestinationItem>
      <HotelDesc>
        <HotelName>Hilton Los Angeles Airport</HotelName>
        <Text>5711 Century Blvd, Los Angeles</Text>
        <Text>CA 9004</Text>
      </HotelDesc>
      <HotelPhotoPrice>
      
        <Photo>
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri: this.logoImage
            }}
          />
        </Photo>
        <Price>
          <Text>$130</Text>
        </Price>
      </HotelPhotoPrice>
    </DestinationItem>
  );
};
