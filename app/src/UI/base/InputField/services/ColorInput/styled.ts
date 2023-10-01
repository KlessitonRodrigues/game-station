import styled, { css } from 'styled-components';

export const Container = styled.div(({ theme }) => {
  return css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.size(2)};
    width: 100%;
  `;
});

export const ColorItem = styled.div<{ bg: string; selected?: boolean }>(
  ({ theme, bg, selected }) => css`
    width: ${theme.size(16)};
    height: ${theme.size(16)};
    border-radius: ${theme.radius.medium};
    box-shadow: ${theme.shadow.medium};
    background: ${bg};
    ${selected && ` border: 2px solid ${theme.colors.white};`}
  `
);
