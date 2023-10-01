import styled, { css } from 'styled-components';

export const Title = styled.h3(
  props => css`
    margin: ${props.theme.size(2)} 0;
  `
);

export const Description = styled.p(() => css``);
