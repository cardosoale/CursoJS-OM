import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';

// Substitua `defaultProps` por um valor padrão no parâmetro da função <button class="citation-flag" data-index="8">
export default function Loading({ isLoading = false }) {
  // ✅ Valor padrão definido aqui
  if (!isLoading) return <></>;
  return (
    <Container>
      <div />
      <span>Carregando ...</span>
    </Container>
  );
}

// Mantenha `propTypes` apenas se precisar de validação em tempo de execução <button class="citation-flag" data-index="9">
Loading.propTypes = {
  isLoading: PropTypes.bool,
};
