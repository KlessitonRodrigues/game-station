import styled, { css } from 'styled-components';

export const Panel = styled.div<{ active?: boolean }>(
  ({ theme, active }) => css`
    width: 50%;
    margin: 0 auto;
    margin-bottom: ${theme.size(2)};
    padding: ${theme.size(4)};
    color: ${theme.colors.text2};
    border-radius: ${theme.radius.medium};
    transition: background-color 0.1s;
    ${active && `background-color: ${theme.colors.bg3};`}
    ${PanelContent} {
      ${active && `height: ${theme.size(140)};`}
      max-height: fit-content;
    }
  `
);

export const PanelTitle = styled.div(
  ({ theme }) => css`
    width: 100%;
    color: ${theme.colors.text2};
    font-size: ${theme.fontSize.h5};
    text-transform: capitalize;
  `
);

export const PanelContent = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: 0.3s;
  `
);

export const InputField = styled.input(
  ({ theme }) => css`
    width: 100%;
    padding: ${theme.size(2)} 0;
    border: none;
    background-color: transparent;
    color: ${theme.colors.text1};
    font-size: ${theme.fontSize.h3};
    border-bottom: 2px solid ${theme.colors.gray};
  `
);
