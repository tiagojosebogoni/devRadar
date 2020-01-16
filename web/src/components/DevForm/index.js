import React, { useState, useEffect } from 'react';

import { Form } from '@rocketseat/unform';
import { Container, TInput, Row, Button } from './styles';

export default function DevForm({ onSubmit }) {
  const [githubUserName, setGithubUserName] = useState('');
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => {
        console.log(error);
      }
    );
  }, [latitude, longitude]);

  async function handleSubmit(data) {
    await onSubmit(data);

    setGithubUserName('');
    setTechs('');
  }

  return (
    <Container>
      <strong>Cadastrar</strong>
      <Form onSubmit={handleSubmit}>
        <TInput
          label="Usuário do Github"
          name="github_username"
          value={githubUserName}
          onChange={e => setGithubUserName(e.target.value)}
        />

        <TInput
          label="Tecnologias"
          name="techs"
          value={techs}
          onChange={e => setTechs(e.target.value)}
        />

        <Row>
          <div>
            <label>Latitude</label>
            <TInput
              name="latitude"
              type="number"
              value={latitude}
              onChange={e => setLatitude(e.target.value)}
              disabled
            />
          </div>
          <div>
            <TInput
              label="Longitude"
              name="longitude"
              type="number"
              value={longitude}
              onChange={e => setLongitude(e.target.value)}
              disabled
            />
          </div>
        </Row>
        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  );
}
