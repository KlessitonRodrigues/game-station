import styled, { css } from 'styled-components';

import { Keyframes } from './Animations';

export const ModalConainer = styled.div(
  () =>
    css`
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #0006;
      display: flex;
      justify-content: center;
      align-items: center;
      backdrop-filter: blur(30px);
    `
);

export const Modal = styled.div(
  props => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: ${props.theme.size(150)};
    padding: ${props.theme.size(4)};
    border-radius: ${props.theme.radius.medium};
    background-color: ${props.theme.colors.bg3};
    color: ${props.theme.colors.text2};
    animation: ${Keyframes.slideUp} 0.3s ease-out;
  `
);

export const ModalContent = styled.div(
  () => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `
);
