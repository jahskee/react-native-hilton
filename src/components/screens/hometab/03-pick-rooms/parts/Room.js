import React, { Component } from 'react';
import { Image, TouchableOpacity } from 'react-native';

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
  Selected,
} from './zstyles';

export const RoomDiv = (props) => {
  const handleRoomSelect = () => {
    props.handleRoomSelect(props.room.roomNo);
  };
  return (
    <TouchableOpacity onPress={handleRoomSelect}>
      <Room>
        <RoomLeft>
          <RoomPhoto>
            <Image
              style={{ width: '100%', height: 60 }}
              source={{
                uri: props.room.image,
              }}
            />
          </RoomPhoto>
          {props.room.isSelected && <Selected>Selected</Selected>}
        </RoomLeft>
        <RoomRight>
          <RoomHeader>
            <RHLeft>
              Room
              {props.room.roomNo}
            </RHLeft>
            <RHMid>{props.room.type}</RHMid>
            <RHRight>
$
              {props.room.price}
            </RHRight>
          </RoomHeader>
          <RoomBody>{props.room.description}</RoomBody>
        </RoomRight>
      </Room>
    </TouchableOpacity>
  );
};
