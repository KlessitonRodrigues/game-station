import styled, { css } from 'styled-components';

export const Container = styled.div(
  () => css`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
  `
);

export const GameList = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    height: ${theme.size(120)};
    gap: ${theme.size(8)};
    margin-bottom: ${theme.size(12)};
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
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    ${img && 'color: transparent;'}
    transition: 0.3s;

    font-size: ${theme.size(20)};
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
    font-size: ${theme.size(14)};
  `
);

export const GameInfo = styled.div(({ theme }) => css``);

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
    margin-right: ${theme.size(4)};
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: 100% 100%;
    ${img && 'color: transparent;'}
    transition: 0.3s;

    font-size: ${theme.size(10)};

    :nth-child(-n + ${selected + 1}) {
      width: 0;
      margin: 0;
      overflow: hidden;
    }
    :nth-child(-n + ${selected + 1}) {
      opacity: 0;
    }
  `
);
