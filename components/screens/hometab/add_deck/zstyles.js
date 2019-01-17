import styled from "styled-components/native";

export const MainView = styled.View`
  flex: 1;
  background: whitesmoke;
  align-items: center;
`;

export const ViewAddDeck = styled.View`
  height: 85%;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const ListDeckBtn = styled.Text`
  margin-bottom: 40px;
  font-size: 18px;
  background: blue;
  color: white;
  padding: 10px 50px;
  align-self: center;
`;

export const SubmitBtn = styled.Text`
  margin-top: 20px;
  font-size: 18px;
  background: blue;
  color: white;
  padding: 10px 50px;
  align-self: center;
`;

export const TextQuestion = styled.Text`
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

export const TextInputDeckName = styled.TextInput`
  border: 1px solid gray;
  padding: 10px;
  margin-top: 10px;
  width: 300px;
`;

export const TextDeckMsg = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  font-weight: bold;
  color: green;
  align-self: center;
`;

export const TextHead = styled.Text`
  font-size: 20;
  font-weight: bold;
`;

export const TextBody = styled.Text`
  font-size: 30;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
  color: green;
`;
