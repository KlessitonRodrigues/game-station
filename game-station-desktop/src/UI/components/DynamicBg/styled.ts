import { materialColors } from "src/styles/lib/palettes";
import styled, { css } from "styled-components";

export const Container = styled.div(
  ({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.black};
    background: linear-gradient(
      150deg,
      ${theme.colors.main},
      ${materialColors.purple["900"]} 60%
    );

    background-size: 400% 400%;
    background-position: 50% 50%;
  `
);
