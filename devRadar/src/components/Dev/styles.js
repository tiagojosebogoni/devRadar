import styled from 'styled-components/native';
import { Image } from 'react-native'

export const Container = styled.View``;

export const Avatar = styled(Image)`
  width: 54px;
  height: 54px;
  border-radius: 4px;
  border-width: 4px;
  border-color: #fff;
`;

export const Info = styled.View`
  width: 260px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const Bio = styled.Text`
  color: #666;
  margin-top:5px;
`;

export const Techs = styled.Text`
  margin-top: 5px;
`;