import styled, { css } from 'styled-components';

export const InputField = styled.input(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.size(2)} 0;
    border: none;
    background-color: transparent;
    color: ${theme.colors.text1};
    font-size: ${theme.fontSize.h3};
    border-bottom: 2px solid ${theme.colors.gray};
    text-transform: capitalize;
  `
);
