import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root{
    --brand-purple: #8284FA;

    --brand-purple-dark: #5E60CE;

    --brand-blue: #4EA8DE;

    --brand-blue-dark: #1E6F9F;

    --danger: #E25858;

    --gray-700: #0D0D0D;
    --gray-600: #1A1A1A;
    --gray-500: #262626;
    --gray-400: #333333;
    --gray-300: #808080;
    --gray-200: #D9D9D9;
    --gray-100: #F2F2F2;
  }

  body{
    height: 100vh;
  }

  @media (max-width: 1080px){
      html{
          font-size: 93.75%;
      }
  }

  @media (max-width: 720px){
      html{
          font-size: 87.5%;
      }
  }

  body{
    background-color: var(--gray-500);
  }

  body, input, textarea, select, button{
      font: 400 1rem "Poppins", sans-serif;
      color: var(--gray-100);
  }

  button{
      cursor: pointer;
  }

  a{
      color: inherit;
      text-decoration: none;
  }
`;
