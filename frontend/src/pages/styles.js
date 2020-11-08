import styled from 'styled-components';

import backgroundImage from '../assets/background.jpg';

export const Container = styled.main`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  > div {
    display: flex;
    flex-direction: column;
    h1 {
      color: #fff;
    }
  }
`;

export const Background = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: 50% 0%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  opacity: 0.5;
`;
