import styled, { css } from 'styled-components';

export const Container = styled.div(({ theme }) => css``);

export const Browser = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    padding: ${theme.size(10)};
    background-color: ${theme.colors.bg2};
    border-radius: ${theme.radius.medium};
  `
);

export const BrowseItems = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: ${theme.size(4)};
  `
);

export const BrowseImage = styled.img<{ selected: boolean }>(
  ({ theme, selected }) => css`
    width: 100%;
    max-width: ${theme.size(250)};
    border: 3px solid transparent;
    border-radius: ${theme.radius.large};
    ${selected && `border-color: ${theme.colors.gray}`}
  `
);

export const BrowseFolder = styled.div<{ selected: boolean }>(({ theme }) => css``);

export const QueryBar = styled.label(
  ({ theme }) => css`
    display: flex;
    align-items: center;
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
