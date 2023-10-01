import { Keyframes } from 'src/UI/base/Styles/Animations';
import styled, { css } from 'styled-components';

export const Container = styled.div(
  () =>
    css`
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: #000a;
      display: flex;
      justify-content: center;
      align-items: center;
    `
);

export const LayoutOption = styled.p(
  props => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${props.theme.size(2)};
    padding: ${props.theme.size(4)};
    width: ${props.theme.size(50)};
    color: ${props.theme.colors.text4};
    cursor: pointer;

    &:hover {
      color: ${props.theme.colors.text1};

      .icon {
        animation: ${Keyframes.spinning} 1s;
      }
    }
  `
);
