import { Keyframes } from 'src/UI/base/Styles/Animations';
import styled, { css } from 'styled-components';

export const Container = styled.div(() => {
  return css``;
});

export const Modal = styled.div(({ theme }) => {
  return css`
    width: 100%;
    height: 100%;
    max-height: ${theme.size(250)};
    max-width: ${theme.size(250)};
    margin: 0 auto;
    padding: ${theme.size(4)};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: ${theme.radius.large};
    animation: ${Keyframes.slideUpLarge} 0.3s ease-out;
  `;
});

export const ModalBg = styled.div(() => {
  return css`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(25px);
    transition: all 0.1s;
  `;
});

export const Title = styled.div(({ theme }) => {
  return css`
    font-size: ${theme.fontSize.h2};
  `;
});
