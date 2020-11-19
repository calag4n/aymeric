import { createGlobalStyle } from 'styled-components'


// TODO custom scrollbars

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    /* Parallax API use important amount of memory otherwise */
    will-change: unset !important;
  }

  html{
    background-color: ${({ theme }) => theme.colors.bg};
  }

  body{
    font-family: ${({ theme }) => theme.fonts.family.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    height: 100%;
    width: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.fonts.family.title};
  }

  html,
  body,
  #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    user-select: none;
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  code {
    font-family: ${({ theme }) => theme.fonts.family.code};
}
`