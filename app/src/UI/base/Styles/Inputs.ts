import styled, { css } from 'styled-components';

export const InputField = styled.input(({ theme }) => {
  return css`
    width: 100%;
    padding: ${theme.size(2)} ${theme.size(1)};
    border: none;
    background-color: transparent;
    color: ${theme.colors.text1};
    font-size: ${theme.fontSize.h3};
    border-bottom: 2px solid ${theme.colors.gray};
  `;
});
