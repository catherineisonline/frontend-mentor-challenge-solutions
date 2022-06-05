import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.text};
}

header {
  color: ${({ theme }) => theme.colors.headerText};
}
.keypad {
  background-color:  ${({ theme }) => theme.colors.keypad};
}
.key, .operator {
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.key};
  box-shadow: 0 4px 0 0 ${({ theme }) => theme.colors.keyShadow};
  color: ${({ theme }) => theme.colors.keyText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.numberKeyHover};
  }
}
.screen {
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.screen};
  color: ${({ theme }) => theme.colors.screenText};
}
.del, .reset {
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.actionKey};
  box-shadow: 0 4px 0 0 ${({ theme }) => theme.colors.actionKeyShadow};
  color: ${({ theme }) => theme.colors.actionKeyText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.actionKeyHover};
  }
}
.equals-key {
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.equalsKey};
  box-shadow: 0 4px 0 0 ${({ theme }) => theme.colors.equalsKeyShadow};
  color: ${({ theme }) => theme.colors.equalsKeyText};
  &:hover {
    background-color: ${({ theme }) => theme.colors.equalKeyHover};
  }
}
.theme-value {
  background-color:  ${({ theme }) => theme.colors.keypad};
}

.theme-btn.active 
{
  background-color: ${({ theme }) => theme.colors.equalsKey};
  &:hover {
    background-color: ${({ theme }) => theme.colors.equalKeyHover};
  }
}



`;
