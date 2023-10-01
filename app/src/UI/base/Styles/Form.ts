import styled, { css } from 'styled-components';

export const Form = styled.div(
  () => css`
    width: 100%;
    height: 100%;
  `
);

export const FormTitle = styled.h2(({ theme }) => {
  return css`
    width: fit-content;
    margin: 0 auto;
    text-align: center;
    font-size: ${theme.fontSize.h2};
    padding-bottom: ${theme.size(2)};
    margin-bottom: ${theme.size(8)};
    font-weight: bold;
    border-bottom: 3px solid ${theme.colors.bg1};
  `;
});
