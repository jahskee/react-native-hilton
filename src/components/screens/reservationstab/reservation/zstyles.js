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

export const Reservation = styled.View`
  flex-direction: column;
  margin: 10px 10px;
`;

export const RowHead = styled.View`
  padding: 2px 5px;
  background: #897272;
`;

export const DateRange = styled.Text`
  font-size: 12px;
  color: whitesmoke;
`;

export const RowBody = styled.View`
  flex-direction: column;
  padding: 5px 5px;
  border: 1px solid lightgray;
`;
export const Row = styled.View`
  flex-direction: row;
  width: 100%;
  margin: 0;
`;

export const Label = styled.Text`
  font-size: 12px;
  width: 30%;
  border: 1px solid lightgray;
  margin: 0;
  padding: 5px;
`;

export const Value = styled.Text`
  font-size: 12px;
  width: 70%;
  border: 1px solid lightgray;
  padding-left: 5px;
  padding: 5px;
`;
