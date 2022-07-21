import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.typography.fonts.primary};
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    font-weight: 400;
    transition: all 0.50s linear; 
    margin: 0;
    overflow-x: hidden;
  }
  html {
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
    cursor: pointer !important;
  }
`;
export const GlobalStylesLight = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.typography.fonts.primary};
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.black};
    font-weight: 400;
    transition: all 0.50s linear; 
    margin: 0;
    overflow-x: hidden;
  }
  html {
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }
`;
export const GlobalStyles404 = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.typography.fonts.primary};
    background: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.calcite};
    font-weight: 400;
    transition: all 0.50s linear; 
    margin: 0;
    overflow-x: hidden;
  }
  html {
    overflow-x: hidden;
  }
  a {
    text-decoration: none;
  }
`;
