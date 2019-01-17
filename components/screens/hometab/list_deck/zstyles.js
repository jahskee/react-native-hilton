import styled from "styled-components/native";

export const MainView = styled.View`
  flex: 1;
  background: whitesmoke;
  align-items: center;
`;

export const DeckBtn = styled.TouchableOpacity`
  border: 1px solid darkgray;
  padding: 5px;
  margin-top: 5px;
  padding: 25px;
`;

export const TextBtn = styled.Text`
  flex-flow: column;
  color: green;
  font-weight: bold;
  font-size: 20px;
  width: 300px;
  text-align: center;
`;

export const TextCards = styled.Text`
  flex-flow: column;
  color: #282222;
  font-size: 16px;
  width: 300px;
  text-align: center;
`;

export const TitleText = styled.Text`
  font-size: 20px;
  color: blue;
  align-self: flex-start;
  margin-left: 10px;
`;

export const ViewListDeck = styled.View`
  height: 85%;
  margin-bottom: 10px;
`;
export const AddDeckBtn = styled.Text`
  margin-bottom: 10px;
  font-size: 18px;
  background: blue;
  color: white;
  padding: 10px 50px;
`;
