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


      @keyframes fadeIn{
        0% {
          opacity: 0;
        }
        100% {
          opacity: 1;
        }
      }

      @keyframes leftRock{
        0% {
          transform: translateX(-1000px);
        }
        100% {
          transform: translateX(-20px);
        }
      }

      @keyframes rightRock{
        0% {
          transform: translateX(1000px);
        }
        100% {
          transform: translateX(0px);
        }
      }

      @keyframes behindRock{
        0% {
          transform: translateY(1000px);
        }
        100% {
          transform: translateY(0px);
        }
      }
`;

export default GlobalStyle;
