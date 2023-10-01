import styled, { css } from 'styled-components';

export const ImageBox = styled.div(
  ({ theme }) => css`
    width: ${theme.size(200)};
    max-width: ${theme.size(200)};
    height: ${theme.size(100)};
    max-height: ${theme.size(100)};
    overflow: hidden;
    display: flex;
    justify-content: center;
  `
);

export const Image = styled.img(
  ({ theme }) => css`
    max-width: 100%;
    max-height: 100%;
    border-radius: ${theme.radius.large};
    box-shadow: ${theme.shadow.high};
  `
);
