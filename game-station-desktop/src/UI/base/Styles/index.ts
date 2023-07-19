import styled, { css } from 'styled-components';

export const Row = styled.div<{ centered?: boolean }>(
  ({ theme, centered }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${theme.size(2)};
    margin-bottom: ${theme.size(4)};
    ${centered && 'justify-content: center;'}
  `
);

export const Column = styled.div<{ centered?: boolean }>(
  ({ theme, centered }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    gap: ${theme.size(4)};
    padding: ${theme.size(2)} 0;
    ${centered && 'justify-content: center;'}
  `
);

export const Panel = styled.div<{ active?: boolean }>(
  ({ theme, active }) => css`
    width: 100%;
    padding: ${theme.size(4)};
    margin-bottom: ${theme.size(4)};
    color: ${theme.colors.text2};
    border-radius: ${theme.radius.large};
    border: 1px solid transparent;
    transition: background-color 0.1s;
    ${active && `background-color: ${theme.colors.bg2};`}
  `
);

export const PanelTitle = styled.div(
  ({ theme }) => css`
    width: 100%;
    padding-bottom: ${theme.size(2)};
    font-size: ${theme.fontSize.h5};
    text-align: center;
  `
);
