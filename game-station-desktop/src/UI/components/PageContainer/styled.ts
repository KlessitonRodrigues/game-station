import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    width: 100%;
    max-width: ${theme.size(400)};
    height: 100%;
    margin: 0 auto;
    overflow-y: auto;
  `
);

export const Content = styled.div(
  ({ theme }) => css`
    padding: ${theme.size(4)};
  `
);
