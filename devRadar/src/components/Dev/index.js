import React from 'react';
import { View } from 'react-native';
import { Marker, Callout} from 'react-native-maps';

import { Avatar, Info, Name, Bio, Techs } from './styles';

export default function Dev({ navigation, dev }) {
  return (
    <Marker 
      coordinate={{ 
        latitude: dev.location.coordinates[1], 
        longitude: dev.location.coordinates[0]
      }}
    >
      <Avatar source={{ uri: dev.avatar_url}}/>

      <Callout onPress={() => {
          navigation.navigate('Profile', { github_username: dev.github_username})
        }}>
        <Info>
          <Name>{dev.name}</Name>
          <Bio>{dev.bio}</Bio>
          <Techs>{dev.techs.join(', ')}</Techs>
        </Info>
      </Callout>
    </Marker>
  );
}
