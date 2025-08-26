import { bgGradientList } from 'src/utils/constants/gradient';
import styled, { css } from 'styled-components';

export const Container = styled.div<{ showBg: boolean }>(
  ({ showBg }) =>
    css`
      z-index: -1;
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #000;
      background-image: ${showBg ? bgGradientList.blueAndPink : ''};
      background-size: 400% 400%;
      background-position: 50% 50%;
      background-repeat: no-repeat;
      background-attachment: fixed;
    `
);

export const BgImage = styled.img<{ blur: boolean }>(
  ({ blur }) =>
    css`
      width: 100%;
      height: 100%;
      object-fit: cover;
      background-size: cover;
      filter: brightness(0.45) blur(${blur ? '60px' : '0'});
    `
);
