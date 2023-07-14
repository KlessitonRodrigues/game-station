import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    max-width: ${theme.size(500)};
    height: 100%;
    margin: 0 auto;
    overflow-y: auto;
  `
);

export const Content = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: ${theme.size(4)};
  `
);
