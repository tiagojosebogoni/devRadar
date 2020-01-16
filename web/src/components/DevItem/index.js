import React from 'react';

import { Container, ListItem, Header, UserInfo, Bio } from './styles';

export default function DevItem({ dev }) {
  return (
    <Container>
      <ListItem>
        <Header>
          <img src={dev.avatar_url} alt="Tiago" />
          <UserInfo>
            <strong>{dev.name}</strong>
            <span>{dev.techs}</span>
          </UserInfo>
        </Header>
        <Bio>
          <p>{dev.bio}</p>
          <a href={`https://github.com/${dev.github_username}`}>
            Acessar perfil Github
          </a>
        </Bio>
      </ListItem>
    </Container>
  );
}
