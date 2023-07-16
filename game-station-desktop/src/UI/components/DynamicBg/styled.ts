import styled, { css } from 'styled-components';

export const Container = styled.div<{ bg: string; img?: string }>(
  ({ theme, bg, img }) => css`
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
    background-image: url(${img});
    background-repeat: no-repeat;
    background-size: cover;
    filter: brightness(0.3);
    transition: 0.5s;
  `
);
