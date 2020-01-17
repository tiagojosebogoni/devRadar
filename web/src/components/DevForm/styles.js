import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const Container = styled.div`
  min-width: 320px;
  max-width: 320px;
  background: #fff;
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;
  margin-right: 30px;

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  form {
    label {
      margin-top: 30px;
      display: flex;
    }
  }
`;

export const TInput = styled(Input)`
  width: 100%;
  height: 32px;
  font-size: 14px;
  color: #666;
  border: 0;
  border-bottom: 1px solid #111;
`;

export const Row = styled.div`
  flex-direction: row;
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;
`;

export const Button = styled.button`
  width: 100%;
  border: 0;
  margin-top: 30px;
  background: #7d40e7;
  border-radius: 2px;
  padding: 15px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  transition: bakground 0.5s;

  &:hover {
    background: #6931ca;
  }
`;
