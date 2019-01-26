import styled from 'styled-components/native';
/* ---------- Panel 1 ----------*/
export const Panel1 = styled.View`
  flex-direction: row;
  padding: 0 10px;
  width: 100%;
  justify-content: space-between;
  margin: 5px;
`;

export const Photo = styled.Image`
  width: 90px;
  height: 90px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

export const HotelInfo = styled.View`
  flex-direction: row;
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

export const Container = styled.View`
  flex-direction: row;
  margin-left: 10px;
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

export const Row = styled.View`
  flex-direction: column;
`;
