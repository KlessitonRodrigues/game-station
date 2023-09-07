import styled, { css } from 'styled-components';

export const FormTitle = styled.h2(({ theme }) => {
  return css`
    width: 100%;
    text-align: center;
    font-size: ${theme.fontSize.h2};
    padding-bottom: ${theme.size(8)};
  `;
});
