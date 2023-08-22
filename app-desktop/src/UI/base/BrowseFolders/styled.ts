import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: ${theme.size(4)} 0;
  `
);

export const Files = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    width: 100%;
  `
);

export const File = styled.div<{ active: boolean }>(
  ({ theme, active }) => css`
    display: inline-flex;
    gap: ${theme.size(2)};
    border-left: 6px solid transparent;
    padding-left: ${theme.size(2)};
    color: ${theme.colors.text1};
    ${active && `border-color: ${theme.colors.white}`}
  `
);

export const FileName = styled.div(({ theme }) => {
  return css``;
});

export const BrowserTitle = styled.div(
  ({ theme }) => css`
    margin-bottom: ${theme.size(2)};
    font-family: monospace;
    width: 100%;
  `
);
