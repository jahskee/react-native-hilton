import styled from "styled-components/native";

export const MainView = styled.View`
  flex: 1;
  background: whitesmoke;
  justify-content: flex-start;
  align-items: center;

`;

export const Rooms = styled.View`
  flex: 1;
  flex-direction: column;
  border: 1px solid red;
  margin-left: 10px;

`;

export const Room = styled.View`

  flex-direction: row;
  border: 1px solid blue;
  width: 98%;
`;
/*----- Room header -----*/
export const RoomHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid blue;
  width: 100%;
`;

export const RHLeft = styled.Text`
  font-size: 12px;
  border: 1px solid blue;
 
`;

export const RHMid = styled.Text`
font-size: 12px;
  border: 1px solid blue;
 
`;

export const RHRight = styled.Text`
font-size: 14px;
font-weight: bold;
  border: 1px solid blue;
 
`;


/*----- Room body -----*/
export const RoomBody = styled.Text`
margin-top: 10px;
  font-size; 5px;

  border: 1px solid blue;
  width: 100%;
`;

export const RoomPhoto = styled.View`
  border: 1px solid blue;
`;

export const RoomDescription = styled.View`
  border: 1px solid blue;
`;

export const RoomLeft = styled.View`
  padding: 5px;
  border: 1px solid blue;
  width: 30%;
`;

export const RoomRight = styled.View`
  padding: 5px;
  border: 1px solid blue;
  width: 70%;
`;



export const Text2 = styled.Text`
  border: 1px solid blue;
`;