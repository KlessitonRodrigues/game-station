import { Keyframes } from 'src/UI/base/Styles/Animations';
import styled, { css } from 'styled-components';

export const LayoutOption = styled.p(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.size(2)};
    padding: ${theme.size(4)};
    width: ${theme.size(50)};
    color: ${theme.colors.text4};
    cursor: pointer;

    &:hover {
      color: ${theme.colors.text1};

      .icon {
        animation: ${Keyframes.spinning} 1s;
      }
    }
  `
);
