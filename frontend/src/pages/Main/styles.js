import styled from 'styled-components';
import { motion } from 'framer-motion';

import backgroundImage from '../../assets/background.jpg';

// motion.main é um main animado pela lib framer-motion
// pode ser usado com qualquer outro elemento html

export const Container = styled(motion.main)`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
    text-align: center;
    max-width: 900px;
    position: relative;

    form {
      width: 100%;
    }
  }
`;

export const Title = styled(motion.h1)`
  font-size: 70px;
  margin-bottom: 20px;

  @media (max-width: 700px) {
    font-size: 30px;
  }
`;

export const Text = styled(motion.h1)`
  font-size: 30px;
  max-width: 80%;
  font-weight: 400;
  @media (max-width: 700px) {
    font-size: 20px;
  }
`;

export const Input = styled(motion.input)`
  height: 60px;
  width: 50%;
  margin-top: 30px;
  background: transparent;
  border: none;
  outline: none;
  border-bottom: 2px solid;
  color: #fff;
  font-size: 25px;
  @media (max-width: 700px) {
    width: 90%;
  }
`;

export const PressEnter = styled(motion.p)`
  position: absolute;
  top: 110%;
  left: 50%;
`;

export const Loading = styled(motion.p)`
  position: absolute;
  top: 120%;
  left: 50%;
`;

export const Background = styled(motion.div)`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: 50% 0%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
