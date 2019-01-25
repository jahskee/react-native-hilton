import styled from 'styled-components/native';

export const MainView = styled.View`
  flex: 1;
  background: whitesmoke;
  align-items: center;
  justify-content: center;
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
