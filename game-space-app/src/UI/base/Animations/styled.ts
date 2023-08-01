import styled, { css, keyframes } from 'styled-components';

export const SlideUpAnimation = styled.div(() => {
  const slideUp = keyframes`
    from {transform: translateY(6rem); opacity: 0}
    to {opacity: 1}
  `;
  return css`
    width: 100%;
    height: 100%;
    animation: ${slideUp} 0.3s ease-out;
  `;
});

export const FadeInAnimation = styled.div(() => {
  const slideUp = keyframes`
    from {opacity: 0}
    to {opacity: 1}
  `;
  return css`
    width: 100%;
    height: 100%;
    animation: ${slideUp} 0.3s ease-out;
  `;
});
