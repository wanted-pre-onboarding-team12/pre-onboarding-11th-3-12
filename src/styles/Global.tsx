import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const style = css`
  ${emotionReset}

  * {
    margin: 0;
    padding: 0;
  }

  body {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    background-color: #c7d1db;
    align-items: center;
  }

  button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    color: #000;
    text-decoration: none;
    outline: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
