import styled from "styled-components/native";

export const MainView = styled.View`
  flex: 1;
  background: whitesmoke;
  align-items: center;
  justify-content: center;
 
`;

export const ScrollView2 = styled.ScrollView`
  width: 100%;
`;

/* ---------- Panel 1 ----------*/
export const Panel1 = styled.View`

  flex-direction: row;
  padding: 0 10px;
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
  padding-top: 8px;
  padding-left: 5px;
  width: 40%;
`;

/* ---------- Panel 2 ----------*/
export const Panel2 = styled.View`
  width: 100%;
`;

/* ---------- Panel 3 ----------*/
export const Panel3 = styled.View`
  margin-top: 10px;
  margin-bottom: 10px;
  
  padding: 10px;

  width: 100%;
`;

/* ---------- Panel 4 ----------*/
export const Panel4 = styled.View`
  margin-bottom: 20px;

  align-items: center;
`;

export const CheckinButton = styled.Text`
    background: green;
    color: whitesmoke;
    font-weight: bold;
    font-size: 18px;
    padding: 10px 40px;
`;

export const DivDate = styled.View`
  flex-direction: row;
  margin-top: 5px;
  justify-content: space-between;
  padding: 0 16px;

`;
export const LabelDate = styled.Text`
  font-size: 16px;  
`;
export const LabelArrival = styled.Text`
  font-size: 16px;
`;
export const Arrival = styled.Text`
font-size: 16px;
color: #30442b;
`;

export const LabelDeparture = styled.Text`
font-size: 16px;
`;
export const Departure = styled.Text`
font-size: 16px;
color: #30442b;
`;



