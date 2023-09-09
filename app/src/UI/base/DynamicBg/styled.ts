import styled, { css } from 'styled-components';

export const Container = styled.div<App.Props.DynamicBg>(
  ({ gradient, img, zIndex }) => css`
    z-index: ${zIndex || -1};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: transparent;
    background-image: ${gradient};
    background-size: 400% 400%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-attachment: fixed;

    ${img &&
    css`
      background-image: url(${img});
      background-size: cover;
      filter: brightness(0.4);
    `}
  `
);

export const Effects = styled.div<App.Props.DynamicBg>(
  ({ blur }) => css`
    width: 100%;
    height: 100%;
    transition: backdrop-filter 0.1s;
    ${blur && 'backdrop-filter: blur(60px);'}
  `
);
