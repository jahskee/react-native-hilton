import styled from 'styled-components/native';

export const Room = styled.View`
  flex-direction: row;
  border: 2px solid lightgray;
  width: 98%;
  padding: 0 5px;
  margin-bottom: 3px;
  background: #cccc;
`;
/* ----- Room header -----*/
export const RoomHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const RHLeft = styled.Text`
  font-size: 14px;
`;

export const RHMid = styled.Text`
  font-size: 14px;
`;

export const RHRight = styled.Text`
  font-size: 16px;
  font-weight: bold;
`;

/* ----- Room body -----*/
export const RoomBody = styled.Text`
  margin-top: 2px;
  font-size: 12px;
  width: 100%;
`;

export const RoomPhoto = styled.View``;

export const RoomDescription = styled.View`
  border: 1px solid blue;
`;

export const RoomLeft = styled.View`
  padding: 5px;
  width: 30%;
`;

export const RoomRight = styled.View`
  padding: 5px;
  width: 70%;
`;

export const Selected = styled.Text`
  color: red;
  font-weight: bold;
  text-align: center;
`;
