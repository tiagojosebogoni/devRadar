import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import { Marker, Callout} from 'react-native-maps';
import { 
  requestPermissionsAsync, 
  getCurrentPositionAsync 
} from 'expo-location'

import api from '../../services/api';

import Dev from '../../components/Dev';

import { 
  Map, 
  Container, 
  Input, 
  Button, 
  Icon } 
  from './styles';

export default function Main({ navigation }) {
  const [currentRegion, setCurrentRegion] = useState(null)
  const [devs, setDevs] = useState([]);
  const [techs, setTechs] = useState('')

  useEffect(() => {
    async function loadPosition(){
      const { granted } = await requestPermissionsAsync();
 
      if (granted){
        const { coords } = await getCurrentPositionAsync();
      
        const { latitude, longitude } = coords;

        setCurrentRegion({
          latitude,
          longitude, 
          latitudeDelta: 0.04,
          longitudeDelta: 0.04,
        })
      }
    }

    loadPosition();
  }, [])

  async function loadDevs(){
    const { latitude, longitude } = currentRegion;

    const response = await api.get('/search', {
      params: {
        latitude,
        longitude,
        techs
      }
    })

    setDevs(response.data);
  }

  async function handleRegionChange(region){
    setCurrentRegion(region)
  }

  return (
    <>
      <Map 
        onRegionChangeComplete={handleRegionChange} 
        initialRegion={currentRegion}
      >
        {devs.map(dev => (
          <Dev key={dev._id} dev={dev} />
        ))}
      </Map>
      <Container>
        <Input 
          placeholder="Buscar devs por techs..."
          placeholderTextColor="#999"
          autoCapitalize="words"
          autoCorrect={false}  
          value={techs}
          onChangeText={setTechs}
          />
        <Button onPress={loadDevs}>
          <Icon name="my-location" size={20} color="#fff" />
        </Button>
      </Container>
    </>
  );
}
