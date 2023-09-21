import { Keyframes } from 'src/UI/base/Styles/Animations';
import styled, { css } from 'styled-components';

export const Container = styled.div(() => {
  return css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
  `;
});

export const Games = styled.div(({ theme }) => {
  return css`
    width: 100%;
    display: flex;
    gap: ${theme.size(8)};
    height: ${theme.size(120)};
    margin-bottom: ${theme.size(20)};
    animation: ${Keyframes.slideUpLarge} 0.2s ease-out;
  `;
});

export const CoverImg = styled.img(
  props =>
    css`
      display: block;
      height: 100%;
      width: ${props.theme.size(90)};
      min-width: ${props.theme.size(90)};
      max-width: ${props.theme.size(90)};
      background-color: transparent;
      border-radius: ${props.theme.radius.large};
      box-shadow: ${props.theme.shadow.high};
    `
);

export const Column = styled.div(() => {
  return css`
    display: flex;
    flex-direction: column;
  `;
});

export const Description = styled.div(() => {
  return css`
    width: 100%;
    height: 100%;
  `;
});

export const GameTitle = styled.div(({ theme }) => {
  return css`
    color: ${theme.colors.text1};
    font-size: ${theme.size(14)};
  `;
});

export const GameInfo = styled.div(({ theme }) => {
  return css`
    color: ${theme.colors.text3};
    font-size: ${theme.fontSize.h4};
  `;
});

export const CoverList = styled.div(() => {
  return css`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
  `;
});

export const CoverListImg = styled.img<{ focus: number }>(
  props =>
    css`
      display: block;
      height: 100%;
      width: ${props.theme.size(50)};
      min-width: ${props.theme.size(50)};
      max-width: ${props.theme.size(50)};
      margin-right: ${props.theme.size(4)};
      background-color: transparent;
      border-radius: ${props.theme.radius.small};
      box-shadow: ${props.theme.shadow.high};
      font-size: ${props.theme.size(10)};
      transition: 0.3s;
      filter: brightness(0.8);

      &.cove-item:nth-child(-n + ${props.focus + 1}) {
        width: 0;
        min-width: 0;
        margin: 0;
        border: none;
        opacity: 0;
        overflow: hidden;
      }
    `
);
