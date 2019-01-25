import React from 'react';
import { Image } from 'react-native';

import {
  Panel1,
  HotelInfo,
  Row,
  HotelName,
  HotelAddress,
  HotelDistance,
  Container,
} from './zstyles';

const HotelHeader = props => (
  <Container>
    <Image
      style={{ width: 90, height: 90 }}
      source={{
        uri: props.hotel.image,
      }}
    />

    <Panel1>
      <HotelInfo>
        <Row>
          <HotelName>{props.hotel.name}</HotelName>
          <HotelAddress>
            {props.hotel.address}
            {' '}
            <HotelDistance>
              {' '}
(
              {props.hotel.distance}
              {' '}
mi)
              {' '}
            </HotelDistance>
          </HotelAddress>
        </Row>
      </HotelInfo>
    </Panel1>
  </Container>
);

export default HotelHeader;
