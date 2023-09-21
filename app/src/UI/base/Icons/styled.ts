import styled, { css } from 'styled-components';

export const Container = styled.span<App.Styled.Props>(
  props =>
    css`
      display: inline-flex;
      font-size: ${props.theme.size(props.size || 8)};
    `
);
