import styled from 'styled-components';
import { motion } from 'framer-motion';

import backgroundImage from '../../assets/background.jpg';

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

    h1 {
      font-size: 70px;
      margin-bottom: 20px;
    }

    p {
      font-size: 30px;
      max-width: 80%;
    }

    input {
      height: 60px;
      width: 50%;
      margin-top: 30px;
      background: transparent;
      border: none;
      outline: none;
      border-bottom: 2px solid;
      color: #fff;
      font-size: 25px;
    }
  }
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
