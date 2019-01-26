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
/* --- mm/yy cvv --- */
export const View2 = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  padding-left: 0;
  padding-top: 5px;
  margin-bottom: 10px;
`;

export const Text2 = styled.Text`
  margin-right: 4px;
`;

export const Text3 = styled.Text`
  margin-right: 4px;
  margin-left: 20px;
`;

export const TextInput2 = styled.TextInput`
  border: 1px solid gray;
  width: 30px;
  margin-right: 5px;
  text-align: center;
  padding: 2px 5px;
`;

export const TextInput3 = styled.TextInput`
  border: 1px solid gray;
  width: 40px;
  text-align: center;
  padding: 2px 5px;
`;

/* -- zip code --*/
export const TextInput4 = styled.TextInput`
  border: 1px solid gray;
  padding: 5px 10px;
  width: 80px;
  height: 25;
`;

export const AmountDiv = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Amount = styled.Text`
  font-size: 16px;
  margin-bottom: 20px;
  text-align: right;
`;
