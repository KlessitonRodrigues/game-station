import styled, { css } from 'styled-components';

import { Keyframes } from '../Styles/Animations';

export const Container = styled.div(
  props => css`
    position: fixed;
    bottom: ${props.theme.size(14)};
    left: 50%;
    translate: -50%;
    width: 100%;
    max-width: ${props.theme.size(260)};
    animation: ${Keyframes.slideUp} 0.3s ease-out;

    .key-item {
      &:hover path {
        fill: #fff7;
      }
      text {
        // text-transform: lowercase;
      }
    }
  `
);
