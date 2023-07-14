import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
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
    position: relative;
    margin-bottom: ${theme.size(10)};
  `
);

export const CoverList = styled.div(
  ({ theme }) => css`
    width: 100%;
    display: flex;
    align-items: flex-end;
    gap: ${theme.size(4)};
    padding: ${theme.size(4)};
  `
);

export const Cover = styled.div<{ first: boolean }>(
  ({ theme, first }) => css`
    background-color: ${theme.colors.bg1};
    border-radius: ${theme.radius.large};
    width: ${theme.size(35)};
    min-width: ${theme.size(35)};
    height: ${theme.size(50)};
    min-height: ${theme.size(50)};

    ${first &&
    css`
      min-width: ${theme.size(70)};
      min-height: ${theme.size(100)};
    `}
  `
);

export const Description = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: ${theme.size(4)};
    left: ${theme.size(78)};
  `
);

export const Title = styled.div(
  ({ theme }) => css`
    font-size: ${theme.fontSize.h1};
    color: ${theme.colors.text2};
  `
);

export const Label = styled.div(
  ({ theme }) => css`
    font-size: ${theme.fontSize.h4};
    color: ${theme.colors.text4};
  `
);
