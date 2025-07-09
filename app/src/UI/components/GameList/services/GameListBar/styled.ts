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
    gap: ${theme.size(2)};
    height: ${theme.size(120)};
    animation: ${Keyframes.slideUpLarge} 0.2s ease-out;
  `;
});

export const CoverImg = styled.img(
  ({ theme }) =>
    css`
      display: block;
      height: 100%;
      margin: 0 10px;
      width: ${theme.size(90)};
      min-width: ${theme.size(90)};
      max-width: ${theme.size(90)};
      border-radius: ${theme.radius.large};
      border: 2px solid ${theme.colors.gray};
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

export const GameInfo = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.text3};
    font-size: ${theme.fontSize.h4};
    text-transform: capitalize;
  `
);

export const CoverList = styled.div(() => {
  return css`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
  `;
});

export const CoverListImg = styled.img<{ focus: number }>(
  ({ theme, focus }) =>
    css`
      display: block;
      height: ${theme.size(60)};
      width: ${theme.size(50)};
      min-width: ${theme.size(50)};
      max-width: ${theme.size(50)};
      margin-right: ${theme.size(4)};
      background-color: transparent;
      border-radius: ${theme.radius.medium};
      font-size: ${theme.size(10)};
      border: 2px solid ${theme.colors.bg1};
      transition: 0.3s ease-out;
      filter: brightness(0.8);

      &.cove-item:nth-child(-n + ${focus + 1}) {
        width: 0;
        min-width: 0;
        margin: 0;
        border: none;
        opacity: 0;
        overflow: hidden;
      }
    `
);
