import styled, { css } from 'styled-components';

export const Container = styled.div(
  ({ theme }) =>
    css`
      position: fixed;
      bottom: ${theme.size(6)};
      left: 50%;
      display: flex;
      gap: ${theme.size(4)};
      translate: -50%;
    `
);

export const Button = styled.div(
  ({ theme }) =>
    css`
      display: flex;
      align-items: center;
      gap: ${theme.size(1)};
    `
);

export const ButtonLabel = styled.div(
  ({ theme }) =>
    css`
      font-size: ${theme.fontSize.label};
      padding-bottom: ${theme.size(0.75)};
      color: ${theme.colors.text1};
    `
);
