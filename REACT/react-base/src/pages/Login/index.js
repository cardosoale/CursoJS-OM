import React from 'react';
import { useDispatch } from 'react-redux';

import { Title, Paragrafo } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/example/action';

export default function Login() {
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();

    dispatch(exampleActions.clicaBotao());
  }
  return (
    <Container>
      <Title isRed={false}>Test component</Title>
      <small>Oii</small>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <button type="button" onClick={handleClick}>
        Enviar
      </button>
    </Container>
  );
}
