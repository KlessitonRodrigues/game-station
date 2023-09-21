import { Keyframes } from 'src/UI/base/Styles/Animations';
import styled, { css } from 'styled-components';

export const Container = styled.div(
  () =>
    css`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    `
);

export const Grid = styled.div<{ lineWidth: number }>(
  props =>
    css`
      display: grid;
      align-content: center;
      justify-items: center;
      grid-template-columns: repeat(5, 1fr);
      grid-gap: ${props.theme.size(6)};
      animation: ${Keyframes.slideUp} 0.2s ease-out;
      overflow: hidden;
    `
);

export const GridItem = styled.img<App.Styled.Props>(
  props =>
    css`
      width: ${props.theme.size(80)};
      height: ${props.theme.size(110)};
      background-color: transparent;
      border-radius: ${props.theme.radius.large};
      box-shadow: ${props.theme.shadow.high};
      font-size: ${props.theme.size(10)};
      transition: 0.2s;
      filter: brightness(0.8);

      &.grid-items:nth-child(${props.focus + 1}) {
        filter: brightness(1);
      }
    `
);
