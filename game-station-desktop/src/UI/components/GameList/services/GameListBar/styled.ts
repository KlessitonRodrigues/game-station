import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
  `
);

export const Games = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    gap: ${theme.size(8)};
    height: ${theme.size(120)};
    margin-bottom: ${theme.size(20)};
  `
);

export const Cover = styled.div<{ img: string }>(
  ({ theme, img }) => css`
    height: 100%;
    width: ${theme.size(90)};
    min-width: ${theme.size(90)};
    max-width: ${theme.size(90)};
    background-color: ${theme.colors.bg1};
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.high};
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: 0.3s;
    font-size: ${theme.size(20)};

    ${img && 'color: transparent;'}
  `
);

export const Column = styled.div(
  () => css`
    display: flex;
    flex-direction: column;
  `
);

export const Description = styled.div(
  () => css`
    width: 100%;
    height: 100%;
  `
);

export const GameTitle = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.text1};
    font-size: ${theme.size(14)};
  `
);

export const GameInfo = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.text3};
    font-size: ${theme.fontSize.h4};
  `
);

export const CoverList = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
  `
);

export const CoverListItem = styled.div<{ selected: number; img: string }>(
  ({ theme, selected, img }) => css`
    height: 100%;
    width: ${theme.size(50)};
    max-width: ${theme.size(50)};
    background-color: ${theme.colors.bg2};
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.high};
    margin-right: ${theme.size(4)};
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-size: ${theme.size(10)};
    transition: 0.3s;
    ${img && 'color: transparent;'}

    :nth-child(-n + ${selected + 1}) {
      width: 0;
      margin: 0;
      opacity: 0;
      overflow: hidden;
    }
  `
);
