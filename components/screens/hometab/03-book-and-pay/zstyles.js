import styled from "styled-components/native";

export const MainView = styled.View`
  flex: 1;
  background: whitesmoke;
  align-items: center;
  justify-content: center;
  padding: 2px 15px;
  
 
`;

/* ---------- Panel 1 ----------*/
export const Panel1 = styled.View`

  flex-direction: row;
  
  width: 100%;
  justify-content: space-between;
  margin: 5px;

`;

export const HotelInfo = styled.View`
  
  padding: 10px 0px;
  width: 60%;
  
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

export const HotelDistance = styled.Text`
  
  margin-bottom: 10px;
  color: #30442b;
  font-size: 12px;
`;
export const HotelPrice = styled.Text`

  color: darkgreen;
`;

export const Photo = styled.View`
  padding-top: 8px;
  padding-left: 5px;
  width: 40%;
`;

/* ---------- Panel 2 ----------*/
export const Panel2 = styled.View`
  flex: 1;
  border: 1px solid blue;
  width: 100%;
`;

/* ---------- Panel 3 ----------*/
export const Panel3 = styled.View`
  flex: 1; 
  border: 1px solid blue;
  width: 100%;
`;

/* ---------- Panel 4 ----------*/
export const Panel4 = styled.View`
 flex: 1;
  border: 1px solid blue;
  width: 100%;
`;

