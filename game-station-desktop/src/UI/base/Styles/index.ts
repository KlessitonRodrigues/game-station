import styled, { css } from 'styled-components';

export const Row = styled.div<{ centered?: boolean }>(
  ({ theme, centered }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: ${theme.size(4)};
    padding: ${theme.size(2)} 0;
    ${centered && 'justify-content: center;'}
  `
);

export const Panel = styled.div<{ focus?: boolean }>(
  ({ theme, focus }) => css`
    width: 100%;
    height: 100%;
    padding: ${theme.size(4)};
    margin-bottom: ${theme.size(4)};
    background-color: ${theme.colors.bg4};
    color: ${theme.colors.text1};
    border-radius: ${theme.radius.medium};
    ${focus && `background-color: ${theme.colors.bg2};`}
  `
);

export const PanelTitle = styled.div(
  ({ theme }) => css`
    font-size: ${theme.fontSize.h3};
    padding: ${theme.size(2)} 0;
  `
);
