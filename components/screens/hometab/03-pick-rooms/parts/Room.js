import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity, Button, ScrollView } from "react-native";

    
  import { 
    Room, 
    RoomHeader, 
    RoomBody,
    RoomPhoto, 
    RoomLeft,
    RoomRight,
    RHLeft,
    RHMid,
    RHRight,
  } from "./zstyles";

  export const RoomDiv = props => {
    return (
        <TouchableOpacity onPress={props.handleRoomSelect}>
         <Room>
                <RoomLeft>
                  <RoomPhoto>
                  <Image
                    style={{ width: '100%', height: 60 }}
                    source={{
                      uri: props.room.image
                    }}
                  />
                  </RoomPhoto>
                </RoomLeft>
                <RoomRight>
                  <RoomHeader>
                    <RHLeft>Room {props.room.roomNo}</RHLeft>
                    <RHMid>{props.room.type}</RHMid>
                    <RHRight>${props.room.price}</RHRight>
                  </RoomHeader>
                  <RoomBody>{props.room.description}</RoomBody>
                </RoomRight>
              </Room>
            </TouchableOpacity>
    );
  }