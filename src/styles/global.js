import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    position: relative;
    margin: 0;
    padding: 0;
    outline: 0;
  }

  body {
    background-color: #FBFAFB;
  }

  #root {
    max-width: 1020px;
    margin: auto;
    padding: 80px 20px;
  }
`;
