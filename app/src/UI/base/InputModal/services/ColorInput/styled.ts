import styled, { css } from 'styled-components';

export const Container = styled.div(({ theme }) => {
  return css`
    width: 100%;
  `;
});

export const ColorItem = styled.div<{ bg: string; selected?: boolean }>(
  ({ theme, bg, selected }) => css`
    width: ${theme.size(15)};
    height: ${theme.size(15)};
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.medium};
    background: ${bg};
    ${selected && ` border: 2px solid ${theme.colors.white};`}
  `
);
