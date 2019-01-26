import styled from 'styled-components/native';

export const MainView = styled.View`
  flex: 1;
  background: whitesmoke;
  justify-content: flex-start;
  align-items: center;
`;

export const TopDivFirst = styled.View`
  margin: 10px 10px;
  margin-bottom: 5px;
`;
export const TopDiv = styled.View`
  margin: 10px 10px;
  margin-bottom: 5px;
  margin-top: 30px;
`;

export const TopText = styled.Text`
  text-align: left;
  color: darkgray;
  text-align: left;
  font-size: 12px;
`;

export const View2 = styled.View`
  border: 1px solid red;
`;

export const Row = styled.View`
  flex: 1;
  flex-direction: row;
  width: 100%;
  padding: 0 8px;
`;

export const Label = styled.Text`
  width: 35%;
  text-align: right;
  color: darkgray;
  padding: 4px 0;
  padding-right: 5px;
  border: 1px solid lightgray;
  font-size: 12px;
`;

export const Value = styled.Text`
  width: 65%;
  font-size: 12px;
  padding: 4px 0;
  padding-left: 5px;
  border: 1px solid lightgray;
  font-size: 12px;
`;

export const SubTotal = styled.Text`
  font-size: 14px;
  font-weight: bold;
  padding-left: 40px;
  color: #ad9595;
`;
export const Total = styled.Text`
  font-size: 16px;
  font-weight: bold;
  padding-left: 40px;
`;
