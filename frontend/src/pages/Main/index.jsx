import React, { useCallback, useState } from 'react';

import {
  containerAnimation,
  itensAnimation,
  pressEnterAnimation,
} from '../../utils/animations';
import {
  Container,
  Background,
  Title,
  Text,
  Input,
  PressEnter,
} from './styles';

import api from '../../services/api';
import Modal from '../../components/Modal';

function Main() {
  const [restaurantCode, setRestaurantCode] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [responseAPI, setResponseAPI] = useState('');

  const getMenu = useCallback(
    async event => {
      event.preventDefault();
      let error = false;
      const response = await api.get(`/menu/${restaurantCode}`).catch(err => {
        error = true;
        return err.response;
      });

      if (error) {
        console.log(response.data.message);
        alert('Código de restaurante inválido, tente novamente.');
        return;
      }

      setResponseAPI(response.data);
      setIsModalVisible(true);
    },
    [restaurantCode],
  );

  return (
    <Container variants={containerAnimation} initial="hidden" animate="visible">
      {isModalVisible && (
        <Modal
          menu={responseAPI}
          setIsModalVisible={() => setIsModalVisible()}
        />
      )}

      <div className="content">
        <Title variants={itensAnimation} custom={1}>
          Seja bem-vindo
        </Title>
        <Text variants={itensAnimation} custom={2}>
          Insira o código do restaurante ifood para consultar o cardápio.
        </Text>
        <form onSubmit={getMenu}>
          <Input
            variants={itensAnimation}
            type="text"
            placeholder="Código"
            custom={3}
            value={restaurantCode}
            onChange={e => setRestaurantCode(e.target.value)}
          />
        </form>
        {restaurantCode && (
          <PressEnter variants={pressEnterAnimation}>
            Pressione enter para consultar
          </PressEnter>
        )}
      </div>
      <Background animate={{ opacity: 0.15 }} transition={{ duration: 2 }} />
    </Container>
  );
}

export default Main;
