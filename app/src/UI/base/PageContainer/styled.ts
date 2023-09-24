import styled, { css } from 'styled-components';

export const Container = styled.div(
  props => css`
    width: 100%;
    max-width: ${props.theme.size(500)};
    height: 100%;
    margin: 0 auto;
    overflow: hidden;
    margin-bottom: ${props.theme.size(20)};
  `
);

export const Content = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    padding: ${theme.size(4)};
  `
);
