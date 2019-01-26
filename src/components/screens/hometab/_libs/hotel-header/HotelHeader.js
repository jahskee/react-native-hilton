import React from 'react';

import {
  Panel1,
  HotelInfo,
  Row,
  HotelName,
  HotelAddress,
  HotelDistance,
  Container,
  Photo,
} from './zstyles';

const HotelHeader = props => (
  <Container>
    <Photo
      source={{
        uri: props.hotel.imageCircle,
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
