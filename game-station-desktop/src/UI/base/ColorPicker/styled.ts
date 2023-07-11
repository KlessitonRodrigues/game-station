import styled, { css } from 'styled-components';

export const ColorItem = styled.div<{ bg: string; selected?: boolean }>(
  ({ theme, bg, selected }) => css`
    width: ${theme.size(15)};
    height: ${theme.size(15)};
    border-radius: ${theme.radius.large};
    background-color: ${bg || theme.colors.black};
    border: 4px solid transparent;
    ${selected && `border-color: ${theme.colors.white};`}
  `
);
