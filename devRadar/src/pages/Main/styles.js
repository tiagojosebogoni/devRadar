import styled from 'styled-components/native';
import MapView from 'react-native-maps'

import { TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

export const Map = styled(MapView)`
  flex: 1;
`;

export const Container = styled.View`
  position: absolute ;
  margin: 20px;
  flex-direction: row;
  z-index: 5;
`;

export const Input = styled.TextInput`
  flex:1;
  height: 50px;
  background: #fff;
  color: #333;
  border-radius: 25px;
  padding: 0 20px;
  font-size: 16px;
  elevation: 5;
`;

export const Button = styled(TouchableOpacity)`
  width: 50px;
  height: 50px;
  background: #8e4dff;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  margin-left: 15px;
`;

export const Icon = styled(MaterialIcons)``;
