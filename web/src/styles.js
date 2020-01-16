import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: top;
  justify-content: center;
  margin: 50px;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
`;

export const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
  }
  /*
  */
`;
