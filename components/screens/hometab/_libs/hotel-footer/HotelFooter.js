import React from "react";
import { View, Text, Image, TouchableOpacity, Button } from "react-native";

import {
    GreenButton,
    HotelFooterView
} from "./zstyles";
  
const HotelFooter = props => {
 


  return (
    <HotelFooterView>
      <TouchableOpacity onPress={props.handleSubmit}>
          <GreenButton>{props.buttonLabel}</GreenButton>
      </TouchableOpacity>
   </HotelFooterView>
  );
        
};


export default HotelFooter;