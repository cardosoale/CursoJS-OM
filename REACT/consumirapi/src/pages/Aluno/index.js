import React from 'react';
import { get } from 'lodash';
import PropTypes from 'prop-types';
import { Form } from './styled';
import { isEmail, isInt, isFloat } from 'validator';
import { toast } from 'react-toastify';
import axios from '../../services/axios';
import history from '../../services/history';

import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', '');
  const [nome, setNome] = React.useState('');
  const [sobrenome, setSobrenome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [idade, setIdade] = React.useState('');
  const [peso, setPeso] = React.useState('');
  const [altura, setAltura] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  React.useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        // const Foto = get(data, 'Fotos[0].url', '');

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        const status = get(error, 'response.status', 0);
        const errors = get(error, 'response.data.errors', []);

        if (status === 400) {
          errors.map((error) => toast.error(error));
          history.push('/');
        }
      }
    }
    getData();
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // let formErrors = false;
    if (nome.length < 3 || nome.length > 255) {
      toast.error('Nome precisa ter pelo menos 3 caracteres');
      // formErrors = true;
    }
    if (sobrenome.length < 3 || sobrenome.length > 255) {
      toast.error('Sobrenome precisa ter pelo menos 3 caracteres');
      // formErrors = true;
    }
    if (!isEmail(email)) {
      toast.error('Email inválido');
      // formErrors = true;
    }
    if (!isInt(String(idade))) {
      toast.error('Idade inválida');
      // formErrors = true;
    }
    if (!isInt(String(peso))) {
      toast.error('Peso inválida');
      // formErrors = true;
    }
    if (!isFloat(String(idade))) {
      toast.error('Idade inválida');
      // formErrors = true;
    }
    if (!isFloat(String(altura))) {
      toast.error('Altura inválida');
      // formErrors = true;
    }
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />
      <h1>{id ? 'Editar aluno' : 'Novo aluno'}</h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder="Idade"
        />
        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso"
        />
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura"
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
