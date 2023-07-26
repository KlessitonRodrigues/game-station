import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.size(4)};
  `
);

export const Files = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.size(1)};
    width: 100%;
  `
);

export const File = styled.div<{ active: boolean }>(
  ({ theme, active }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.size(1)};
    font-size: ${theme.fontSize.body};
    color: ${theme.colors.text1};
    border-left: 6px solid transparent;
    padding-left: ${theme.size(2)};
    ${active && `border-color: ${theme.colors.white}`}
  `
);

export const BrowserTitle = styled.div(
  ({ theme }) => css`
    text-align: center;
    font-size: ${theme.fontSize.h3};
  `
);
