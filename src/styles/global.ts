import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #FFFFFF;
    --black: #000000;
    --gray: #EDEDED;
    --aqua: #00D9D0;
    --navy: #0A1633;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: 0;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%;
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 81.25%;
    }
  }

  body {
    background-color: var(--white);
  }

  body, input, textarea, select, button {
    font: 400 1rem "Roboto", sans-serif;
  }

  button {
    cursor: pointer;
  }
`