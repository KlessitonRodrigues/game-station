import styled, { css } from 'styled-components';

export const ColorItem = styled.div<{ bg: string; selected?: boolean }>(
  ({ theme, bg, selected }) => css`
    width: ${theme.size(10)};
    height: ${theme.size(20)};
    border-radius: ${theme.radius.medium};
    background: ${bg};
    ${selected && ` border: 2px solid ${theme.colors.gray};`}
  `
);
