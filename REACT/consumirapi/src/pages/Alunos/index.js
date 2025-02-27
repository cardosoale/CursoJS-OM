import React, { useEffect } from 'react';

import axios from '../../services/axios';
import { Container } from '../../styles/GlobalStyles';

export default function Alunos() {
  useEffect(() => {
    async function getData() {
      const response = await axios.get('/alunos');
      console.log(response.data);
    }

    getData();
  }, []);

  return (
    <Container>
      <h1>Alunos</h1>
    </Container>
  );
}
