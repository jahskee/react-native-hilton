/* jshint esversion: 6 */
import styled from 'styled-components/native';
/* ---------- Panel 1 ----------*/
export const Panel1 = styled.View`

  flex-direction: row;
 padding: 0;
 margin: 0
  width: 100%;
  justify-content: space-between;

`;

export const ImageLogo = styled.Image``;

export const HotelInfo = styled.View`
  padding-top: 5px;
  width: 70%;
`;
export const HotelName = styled.Text`
  padding-top: 10px;
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 5px;
  color: #30442b;
`;
export const HotelAddress = styled.Text`
  margin-bottom: 10px;
  color: #7c6d6d;
  font-size: 12px;
`;

export const HotelDiv2 = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const HotelDistance = styled.Text`
  margin-bottom: 10px;
  color: #30442b;
  font-size: 12px;
`;
export const HotelPrice = styled.Text`
  color: #30442b;
  margin-right: 10px;
  font-weight: bold;
`;

export const Photo = styled.View`
  padding-top: 5px;
  padding-left: 5px;
  width: 30%;
`;
