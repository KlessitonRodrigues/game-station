import styled, { css } from 'styled-components';

export const Container = styled.div<{ size: number }>(({ theme, size }) => {
  return css`
    display: block;
    font-size: ${theme.size(size || 8)};
  `;
});
