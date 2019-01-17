import styled from "styled-components/native";

export const MainView = styled.View`
  flex: 1;
  background: whitesmoke;
`;

export const ViewQuiz = styled.View`
  height: 85%;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;

export const NextBtn = styled.Text`
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
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  padding-top: 50px;
`;

export const TextInputQuestion = styled.TextInput`
  border: 1px solid gray;
  padding: 10px;
  margin-top: 5px;
  width: 300px;
  margin-bottom: 10px;
`;

export const TextAnswer = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

export const TextInputAnswer = styled.TextInput`
  border: 1px solid gray;
  padding: 10px;
  margin-top: 5px;
  width: 300px;
`;

export const TextIsCorrect = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin-top: 20px;
`;

export const TextSavedMsg = styled.Text`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: darkgreen;
`;

export const ViewQA = styled.View`
  padding: 40px;
  margin-bottom: 20px;
`;
export const TextGroup = styled.View`
  margin-bottom: 20px;
`;

export const TextHead = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 10px;
  left: -10px;
`;

export const TextBody = styled.Text`
  font-size: 18px;
`;

export const TextPageNo = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
  margin-left: 30px;
`;

export const CorrectBtn = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
  background: green;
  margin-bottom: 5px;
  margin-top: 100px;
  padding: 15px 60px;
`;

export const IncorrectBtn = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: white;
  background: red;
  padding: 15px 60px;
`;

export const ViewButtonPanel = styled.Text`
  flex-direction: column;
  justify-content: center;
`;
