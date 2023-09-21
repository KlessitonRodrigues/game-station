import styled, { css } from 'styled-components';

import { Keyframes } from '../Styles/Animations';

export const Container = styled.div(() => {
  return css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #000b;
    backdrop-filter: blur(10px);
  `;
});

export const Spinner = styled.div(({ theme }) => {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${theme.size(8)};
    animation: ${Keyframes.spinning} 1s infinite linear;
  `;
});

export const Title = styled.p(({ theme }) => {
  return css`
    font-size: ${theme.fontSize.label};
    margin-bottom: ${theme.size(2)};
    animation: ${Keyframes.slideUpLarge} 0.5s ease-out;
  `;
});

export const Description = styled.p(({ theme }) => {
  return css`
    color: ${theme.colors.text4};
    font-size: ${theme.fontSize.verySmall};
    animation: ${Keyframes.slideUpLarge} 0.5s ease-out;
  `;
});
