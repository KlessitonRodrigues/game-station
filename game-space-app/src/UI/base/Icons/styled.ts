import styled, { css } from 'styled-components';

export const Container = styled.span<{ size: number }>(({ theme, size }) => {
  return css`
    display: inline-flex;
    font-size: ${theme.size(size || 8)};
  `;
});
