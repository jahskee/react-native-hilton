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
        <HotelName>{props.hotel.name}</HotelName>
        <Text>{props.hotel.address}</Text>
      </HotelDesc>
      <HotelPhotoPrice>
      
        <Photo>
          <Image
            style={{ width: 50, height: 50 }}
            source={{
              uri: props.hotel.image
            }}
          />
        </Photo>
        <Price>
          <Text>${props.hotel.price}</Text>
        </Price>
      </HotelPhotoPrice>
    </DestinationItem>
  );
};
