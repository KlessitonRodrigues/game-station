import styled, { css } from 'styled-components';

export const Container = styled.div<{ bg: string }>(
  ({ theme, bg }) => css`
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.black};
    background: ${bg};
    background-size: 400% 400%;
    background-position: 50% 50%;
  `
);
