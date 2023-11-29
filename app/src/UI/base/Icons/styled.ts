import styled, { css } from 'styled-components';

export const Container = styled.span<{ size?: number }>(
  props =>
    css`
      display: inline-flex;
      font-size: ${props.theme.size(props.size || 8)};
    `
);
