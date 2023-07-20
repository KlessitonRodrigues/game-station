import styled, { css } from 'styled-components';

export const ColorItem = styled.div<{ bg: string; selected?: boolean }>(
  ({ theme, bg, selected }) => css`
    width: ${theme.size(15)};
    height: ${theme.size(25)};
    border-radius: ${theme.radius.large};
    box-shadow: ${theme.shadow.medium};
    background: ${bg};
    ${selected && ` border: 2px solid ${theme.colors.gray};`}
  `
);

export const Row = styled.div<{ centered?: boolean }>(
  ({ theme, centered }) => css`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.size(2)};
    margin-bottom: ${theme.size(4)};
    ${centered && 'justify-content: center;'}
  `
);
