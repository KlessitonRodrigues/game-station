import styled, { css } from 'styled-components';

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
    margin-bottom: ${theme.size(4)};
    font-size: ${theme.fontSize.h5};
    text-align: center;
  `
);
