import styled from 'styled-components/native';

export const KeyboardAvoidingView2 = styled.KeyboardAvoidingView`
  flex: 1;
`;

export const Container = styled.View`
  margin-left: 25px;
  margin-right: 25px;
`;

export const TopLabel = styled.View`
  margin-bottom: 20px;
`;

export const Row = styled.View`
  flex-direction: row;

  width: 100%;
  margin-top: 5px;
`;

export const Label = styled.Text`
  font-size: 12px;
  width: 30%;
  height: 25;
`;

export const Input = styled.TextInput`
  border: 1px solid gray;
  padding: 5px 10px;
  width: 70%;
  height: 25;
`;
