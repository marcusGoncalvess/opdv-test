import React from 'react';

import { motion } from 'framer-motion';

import { containerAnimation, itensAnimation } from '../../utils/animations';
import { Container, Background } from './styles';

function Main() {
  // motion.h1 é um h1 animado pela lib framer-motion
  // pode ser usado com qualquer outro elemento html
  return (
    <Container variants={containerAnimation} initial="hidden" animate="visible">
      <div className="content">
        <motion.h1 variants={itensAnimation} custom={1}>
          Seja bem-vindo
        </motion.h1>
        <motion.p variants={itensAnimation} custom={2}>
          Insira o código do restaurante ifood para consultar o cardápio.
        </motion.p>
        <motion.input
          variants={itensAnimation}
          type="text"
          placeholder="Código"
          custom={3}
        />
      </div>
      <Background animate={{ opacity: 0.15 }} transition={{ duration: 2 }} />
    </Container>
  );
}

export default Main;
