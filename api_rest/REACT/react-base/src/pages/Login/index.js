import React from 'react';
import { useDispatch } from 'react-redux';

import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch({
      type: 'BOTAO_CLICADO',
    });
  }
  return (
    <Container>
      <Title isRed={false}>Test component</Title>
      <small>Oii</small>
      <p>Lorem ipsum dolor sit amet.</p>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
