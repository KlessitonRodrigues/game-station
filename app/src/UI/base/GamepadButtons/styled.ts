import styled, { css } from 'styled-components';

export const Container = styled.div(
  props =>
    css`
      position: fixed;
      bottom: ${props.theme.size(6)};
      left: 50%;
      display: flex;
      gap: ${props.theme.size(4)};
      translate: -50%;
    `
);

export const Button = styled.div(
  props =>
    css`
      display: flex;
      align-items: center;
      gap: ${props.theme.size(1)};
    `
);

export const ButtonLabel = styled.div(
  props =>
    css`
      font-size: ${props.theme.fontSize.label};
      padding-bottom: ${props.theme.size(0.75)};
      color: ${props.theme.colors.text3};
    `
);
