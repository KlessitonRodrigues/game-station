import styled, { css } from 'styled-components';

import { Keyframes } from '../Styles/Animations';

export const Container = styled.div<{ shift: boolean }>(
  props => css`
    position: fixed;
    bottom: ${props.theme.size(18)};
    left: 50%;
    translate: -50%;
    width: 100%;
    max-width: ${props.theme.size(240)};
    animation: ${Keyframes.slideUp} 0.3s ease-out;
    backdrop-filter: blur(30px);

    .key-item:hover path,
    .action-item:hover path {
      fill: #fff7;
    }
    .key-item text {
      ${props.shift && 'text-transform: lowercase;'}
    }
  `
);
