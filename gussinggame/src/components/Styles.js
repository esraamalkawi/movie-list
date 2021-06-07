import styled, { createGlobalStyle } from "styled-components";

export const Center = styled.div`
  font-size: xx-large;
  font-style: italic;
  font-weight: bolder;
  text-align: center;
  margin-top: 5%;
`;

export const GlobalStayle = createGlobalStyle`
body {
    background-color:#EAE2B7
}
`;
export const ThemeButton = styled.button`
  border: none;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  background-color: #f77f00;
  color: #003049;
  margin: 10px;
`;
export const Buttons = styled.input`
  width: 50%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
`;
