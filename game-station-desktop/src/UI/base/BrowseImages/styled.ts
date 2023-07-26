import styled, { css } from 'styled-components';

export const Browse = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.size(4)} 0;
  `
);

export const Image = styled.img(
  ({ theme }) => css`
    max-height: 100%;
    max-width: 100%;
    border-radius: ${theme.radius.large};
    box-shadow: ${theme.shadow.high};
  `
);
