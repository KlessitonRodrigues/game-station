import styled, { css } from 'styled-components';

export const Container = styled.div(({ theme }) => css``);

export const Browser = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.size(8)} ${theme.size(4)};
    background-color: ${theme.colors.bg2};
    border-radius: ${theme.radius.medium};
  `
);

export const BrowseItems = styled.div(
  ({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    height: ${theme.size(200)};
    gap: ${theme.size(4)};
  `
);

export const BrowseImage = styled.img(
  ({ theme }) => css`
    max-height: 100%;
    max-width: 100%;
    border-radius: ${theme.radius.large};
    box-shadow: ${theme.shadow.high};
  `
);

export const BrowseFolder = styled.div(({ theme }) => css``);

export const QueryBar = styled.label(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.size(4)};
  `
);

export const Query = styled.div(
  ({ theme }) => css`
    color: ${theme.colors.text1};
    font-size: ${theme.fontSize.h3};
    padding: ${theme.size(2)};
    font-family: monospace;
  `
);
