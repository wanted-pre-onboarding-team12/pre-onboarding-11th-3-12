import { Global, css } from '@emotion/react';
import emotionReset from 'emotion-reset';

const style = css`
  ${emotionReset}

  * {
    margin: 0;
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif;
    box-sizing: border-box;
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  body {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #1f2328;
    background-color: #f6f8fa;
  }

  button {
    background: transparent;
    border: none;
    padding: 0;
    cursor: pointer;
  }

  a {
    color: #1f2328;
    outline: none;
  }
`;

const GlobalStyle = () => {
  return <Global styles={style} />;
};

export default GlobalStyle;
