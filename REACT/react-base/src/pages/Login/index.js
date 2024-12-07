import React from 'react';
import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  return (
    <Container>
      <Title isRed={false}>Test component</Title>
      <small>Oii</small>
      <p>Lorem ipsum dolor sit amet.</p>
      <button type="button">Enviar</button>
    </Container>
  );
}
