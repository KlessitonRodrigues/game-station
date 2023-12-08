import styled, { css } from 'styled-components';

export const Form = styled.div(
  () => css`
    width: 100%;
    height: 100%;
  `
);

export const FormTitle = styled.h2(({ theme }) => {
  return css`
    width: 100%;
    margin: 0 auto;
    text-align: center;
    font-size: ${theme.fontSize.h1};
    padding-bottom: ${theme.size(2)};
    margin-bottom: ${theme.size(8)};
    font-weight: bold;
    text-transform: uppercase;
  `;
});
