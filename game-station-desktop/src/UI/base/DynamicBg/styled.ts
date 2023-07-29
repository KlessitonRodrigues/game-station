import styled, { css } from 'styled-components';

export const Container = styled.div<{ bg: string; img?: string; zIndex: number }>(
  ({ bg, img, zIndex }) => css`
    z-index: ${zIndex || -1};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background-image: ${bg};
    background-size: 400% 400%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;

    ${img &&
    css`
      background-image: url(${img});
      background-size: cover;
      filter: brightness(0.6);
    `}
  `
);
