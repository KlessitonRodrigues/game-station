import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `
);

export const SlideBox = styled.div(({ theme }) => {
  return css`
    display: flex;
    align-items: center;
    justify-content: center;
  `;
});

export const ImageBox = styled.div(
  ({ theme }) => css`
    width: ${theme.size(200)};
    max-width: ${theme.size(200)};
    height: ${theme.size(100)};
    max-height: ${theme.size(100)};
    overflow: hidden;
    display: flex;
    justify-content: center;
  `
);

export const Image = styled.img(
  ({ theme }) => css`
    max-width: 100%;
    max-height: 100%;
    border-radius: ${theme.radius.large};
    box-shadow: ${theme.shadow.high};
  `
);
