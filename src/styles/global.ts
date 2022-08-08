import reset from 'styled-reset';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
     ${reset};

      *, *::before, *::after {
        box-sizing: border-box;
        font-family: 'Lato', sans-serif;
        user-select: none;
      }

      body {
        background: linear-gradient(#2b1055, #7597de);
      }

      @keyframes blink{
        0% {
          opacity: 1;
        }
        100% {
          opacity: 0;
        }
      }
`;

export default GlobalStyle;
