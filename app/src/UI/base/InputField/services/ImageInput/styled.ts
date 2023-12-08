import styled, { css } from 'styled-components';

export const ImageBox = styled.div(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.size(4)};
    height: ${theme.size(120)};
    max-height: ${theme.size(120)};
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
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
