import { Keyframes } from 'src/UI/base/Styles/Animations';
import styled, { css } from 'styled-components';

export const Container = styled.div(
  () =>
    css`
      width: 100%;
      height: 100%;
      display: flex;
      align-items: flex-end;
    `
);

export const Grid = styled.div(
  props =>
    css`
      height: 100%;
      margin: 0 auto;
      max-width: ${props.theme.size(400)};
      display: grid;
      align-content: flex-start;
      justify-items: center;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: ${props.theme.size(8)};
      padding: 0 ${props.theme.size(16)};
      animation: ${Keyframes.slideUp} 0.2s ease-out;
    `
);

export const GridItem = styled.div<App.Styled.Props>(
  props =>
    css`
      width: ${props.theme.size(80)};
      height: ${props.theme.size(110)};
      background-color: transparent;
      border-radius: ${props.theme.radius.large};
      box-shadow: ${props.theme.shadow.high};
      border: 2px solid ${props.theme.colors.bg2};
      background-image: url(${props.imgSrc});
      background-repeat: no-repeat;
      background-size: 100% 100%;
      font-size: ${props.theme.size(10)};
      transition: 0.2s;
      ${props.imgSrc && 'color: transparent;'}

      :nth-child(${props.focus + 1}) {
        border: 2px solid ${props.theme.colors.gray};
      }
    `
);
