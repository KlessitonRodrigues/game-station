import styled, { css } from 'styled-components';

export const Container = styled.div<{ gradient: string }>(
  props =>
    css`
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: transparent;
      background-image: ${props.gradient};
      background-size: 400% 400%;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-attachment: fixed;
    `
);

export const BgImage = styled.img(
  props =>
    css`
      width: 100%;
      height: 100%;
      background-size: cover;
      filter: brightness(0.5);
    `
);
