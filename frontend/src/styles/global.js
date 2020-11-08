import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box
  }

  body {
    background-color: #221b51;
    font-family: 'Ubuntu', sans-serif;
  }

  button{
    cursor: pointer;
  }
`;
