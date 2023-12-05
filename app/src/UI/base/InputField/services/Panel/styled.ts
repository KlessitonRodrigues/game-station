import styled, { css } from 'styled-components';

export const Container = styled.div<{ active: boolean; focus: boolean }>(
  ({ theme, active }) =>
    css`
      width: 75%;
      margin: 0 auto;
      padding: ${theme.size(4)};
      margin-bottom: ${theme.size(4)};
      color: ${theme.colors.text3};
      background-color: ${theme.colors.bg4};
      border-radius: ${theme.radius.medium};
      transition: 0.3s;

      ${focus &&
      css`
        color: ${theme.colors.text1};
      `}

      ${active &&
      css`
        background-color: ${theme.colors.bg2};
        color: ${theme.colors.text1};
        ${Value} {
          opacity: 0;
        }
        ${Content} {
          max-height: ${theme.size(120)};
        }
      `}
    `
);

export const Header = styled.div(
  props =>
    css`
      display: flex;
      align-items: center;
      gap: ${props.theme.size(4)};
    `
);

export const Title = styled.div(
  props =>
    css`
      font-size: ${props.theme.fontSize.h4};
      font-weight: bold;
    `
);

export const Value = styled.div(() => {
  return css`
    transition: 0.3s;
    width: 100%;
  `;
});

export const Content = styled.div(() => {
  return css`
    width: 100%;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s;
  `;
});
