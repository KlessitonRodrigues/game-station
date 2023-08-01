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
  `;
});

export const Cover = styled.div<{ img: string }>(({ theme, img }) => {
  return css`
    height: 100%;
    width: ${theme.size(90)};
    min-width: ${theme.size(90)};
    max-width: ${theme.size(90)};
    background-color: transparent;
    border-radius: ${theme.radius.large};
    box-shadow: ${theme.shadow.high};
    border: 2px solid ${theme.colors.bg1};
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: 0.2s;
    font-size: ${theme.size(20)};
    ${img && 'color: transparent;'}
  `;
});

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

export const CoverListItem = styled.div<{ selected: number; img: string }>(
  ({ theme, selected, img }) => {
    return css`
      height: 100%;
      width: ${theme.size(50)};
      max-width: ${theme.size(50)};
      margin-right: ${theme.size(4)};
      background-color: transparent;
      border-radius: ${theme.radius.medium};
      box-shadow: ${theme.shadow.high};
      border: 2px solid ${theme.colors.bg1};
      background-image: url(${img});
      background-repeat: no-repeat;
      background-size: 100% 100%;
      font-size: ${theme.size(10)};
      transition: 0.3s;
      ${img && 'color: transparent;'}

      :nth-child(-n + ${selected + 1}) {
        width: 0;
        margin: 0;
        border: none;
        opacity: 0;
        overflow: hidden;
      }
    `;
  }
);
