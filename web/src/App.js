import React, { useEffect, useState } from 'react';
import DevForm from './components/DevForm';
import DevItem from './components/DevItem';
import StylesGlobal from './global';
import { Container, List } from './styles';
import api from './services/api';

export default function App() {
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('devs');

      setDevs(response.data);
    }

    loadDevs();
  }, []);

  async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]);
    console.log(response);
  }

  return (
    <Container>
      <StylesGlobal />

      <DevForm onSubmit={handleAddDev} />

      <List>
        {devs.map(dev => (
          <DevItem key={dev._id} dev={dev} />
        ))}
      </List>
    </Container>
  );
}
