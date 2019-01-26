import React from 'react';
import { TouchableOpacity } from 'react-native';

import { GreenButton, HotelFooterView } from './zstyles';

const HotelFooter = props => (
  <HotelFooterView>
    <TouchableOpacity onPress={props.handleSubmit}>
      <GreenButton>{props.buttonLabel}</GreenButton>
    </TouchableOpacity>
  </HotelFooterView>
);

export default HotelFooter;
