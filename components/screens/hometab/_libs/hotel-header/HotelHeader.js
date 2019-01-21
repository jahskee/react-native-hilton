import React from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";

import {
  Panel1,
  HotelInfo,
  Photo,
  HotelName,
  HotelAddress,
  HotelDistance
} from "./zstyles";

const HotelHeader = props => {
  image01 = "https://i.imgur.com/7gQlc4P.png";

  return (
    <View>
      <Image
        style={{ width: 90, height: 90 }}
        source={{
          uri: this.image01
        }}
      />

      <Panel1>
        <HotelInfo>
          {props.hotel !== undefined && (
            <View>
              <HotelName>{props.hotel.name}</HotelName>
              <HotelAddress>
                {props.hotel.address}{" "}
                <HotelDistance> ({props.hotel.distance} mi) </HotelDistance>
              </HotelAddress>
            </View>
          )}
        </HotelInfo>
      </Panel1>
    </View>
  );
};

export default HotelHeader;
