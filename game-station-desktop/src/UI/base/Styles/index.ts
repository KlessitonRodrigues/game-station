import styled, { css } from "styled-components";

export const Panel = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.bg3};
    color: ${theme.colors.text1};
    padding: ${theme.size(4)};
    border-radius: ${theme.radius.medium};
  `
);

export const PanelTitle = styled.div(
  ({ theme }) => css`
    font-size: ${theme.fontSize.h3};
    margin-bottom: ${theme.size(4)};
  `
);
