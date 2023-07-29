import styled, { css } from 'styled-components';

export const Panels = styled.div(
  ({ theme }) => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${theme.size(4)};
  `
);

export const Panel = styled.div<{ active?: boolean }>(
  ({ theme, active }) => css`
    width: 75%;
    margin: 0 auto;
    padding: ${theme.size(4)};
    color: ${theme.colors.text3};
    background-color: ${theme.colors.bg4};
    border-radius: ${theme.radius.medium};
    transition: 0.1s;

    ${active && `background-color: ${theme.colors.bg2}; color: ${theme.colors.text1};`}
    ${PanelContent} {
      ${active && `height: ${theme.size(150)};`}
    }
  `
);

export const PanelTitle = styled.div(
  ({ theme }) => css`
    width: 100%;
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
    text-transform: capitalize;
  `
);
