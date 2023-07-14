import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${theme.size(150)};
    height: ${theme.size(150)};
    padding: ${theme.size(4)};
    color: ${theme.colors.text1};
    border-radius: ${theme.radius.medium};
  `
);
